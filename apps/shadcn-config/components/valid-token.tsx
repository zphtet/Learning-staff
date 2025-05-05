import { useValidToken } from "../hooks/use-valid-token";

const ValidToken = () => {
  const { token, isRefreshing, error, session } = useValidToken();

  return (
    <div>
      {isRefreshing && <div>Refreshing...</div>}
      {error && <div>Error: {error}</div>}
      {token && <div>Token: {token}</div>}
      {/* @ts-ignore     */}
      <div>Expires at: {new Date(session?.expiresAt).toLocaleString()}</div>
      {session && <div>Session: {JSON.stringify(session)}</div>}
    </div>
  );
};

export default ValidToken;
