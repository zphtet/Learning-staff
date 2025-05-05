import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { generateRefreshToken } from "@/api/query";

const REFRESH_THRESHOLD = 60 * 1000; // 1 minute

export const useValidToken = () => {
  const { data: session, update, status } = useSession();
  const [token, setToken] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session || status !== "authenticated") return;

    const { accessToken, refreshToken, expiresAt }: any = session;

    // Ensure token is set only if it's not already
    if (!token) {
      setToken(accessToken);
    }

    // If expiresAt is missing or expired, don’t proceed
    if (!expiresAt || Date.now() > Number(expiresAt)) {
      return;
    }

    const timeUntilRefresh = Number(expiresAt) - Date.now() - REFRESH_THRESHOLD;

    // Set a timeout to refresh token 1 minute before expiry
    const timeoutId = setTimeout(
      async () => {
        setIsRefreshing(true);
        try {
          if (!refreshToken) {
            throw new Error("No refresh token found");
          }

          const response = await generateRefreshToken({ refreshToken });
          const {
            token: newAccessToken,
            refreshToken: newRefreshToken,
            tokenType,
            expiresIn,
          } = response.data.refreshToken;

          // Only update session and state if token has changed
          if (newAccessToken !== accessToken) {
            await update({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
              tokenType,
              expiresIn,
              expiresAt: Date.now() + Number(expiresIn) * 1000,
            });

            // Update token state only when it changes
            setToken(newAccessToken);
          }
        } catch (err: any) {
          setError("Token refresh failed");
          signOut();
        } finally {
          setIsRefreshing(false);
        }
      },
      Math.max(0, timeUntilRefresh),
    ); // Delay until 1 min before expiration

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, [session, status, token, update]); // Dependency array ensures re-run only when session changes

  return { session, token, isRefreshing, error };
};
