import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { generateRefreshToken, signIn as SignInFun } from "@/api/query";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        credentials: { label: "Credentials", type: "text" },
        scope: { label: "Scope", type: "text" },
        type: { label: "Type", type: "text" },
      },
      async authorize(credentials) {
        try {
          const response = (await SignInFun({
            credentials: credentials.credentials as string,
            scope: credentials.scope as string,
            type: credentials.type as string,
          })) as SignInResponse;

          //   console.log("Authorized result", response);

          if (response?.errors) {
            //   const error = new Error(response.errors[0].message);
            return null;
          }
          return {
            id: response.data.signIn.token, // require
            accessToken: response.data.signIn.token,
            refreshToken: response.data.signIn.refreshToken,
            tokenType: response.data.signIn.tokenType,
            // expiresIn: response.data.signIn.expiresIn,
            expiresIn: 180, // 3 minutes
          };
        } catch (error) {
          console.log("Throwing errror ****");
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // @ts-ignore
      //   session.customToken = token;

      //   console.log("token", token);
      // @ts-ignore
      session.token = token.sub;
      session.user = {
        // @ts-ignore
        userName: "ZPH",
        email: "zinpainghtet.215108@gmail.com",
        projects: [
          {
            name: "pos",
            id: "1",
          },
          {
            name: "appointment",
            id: "2",
          },
        ],
      };

      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.refreshToken = token.refreshToken;
      // @ts-ignore
      session.tokenType = token.tokenType;
      // @ts-ignore
      session.expiresIn = token.expiresIn;
      // @ts-ignore
      session.expiresAt = token.expiresAt;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        // @ts-ignore
        token.refreshToken = user.refreshToken;
        // @ts-ignore
        token.tokenType = user.tokenType;
        // @ts-ignore
        token.expiresIn = user.expiresIn;
        // Store the absolute expiry time (in ms)
        // @ts-ignore
        token.expiresAt = Date.now() + Number(user.expiresIn) * 1000;
      }
      console.log("User", user);

      console.log("TOKEN ***", token);
      console.log("Date now ***", Date.now());
      console.log("Expires at ***", token.expiresAt);
      // If token has expired, try to refresh it
      // @ts-ignore
      if (token.expiresAt && Date.now() > token.expiresAt) {
        try {
          console.log("REGENRATING TOKEN ***");
          const response = await generateRefreshToken({
            // @ts-ignore
            refreshToken: token?.refreshToken,
          });

          console.log("RESPONSE ***", JSON.stringify(response));
          if (response?.data?.refreshToken) {
            const {
              token: newToken,
              tokenType,
              refreshToken: newRefreshToken,
              expiresIn,
            } = response.data.refreshToken;

            token.accessToken = newToken;
            token.refreshToken = newRefreshToken;
            token.tokenType = tokenType;
            token.expiresIn = expiresIn;
            // token.expiresAt = Date.now() + Number(expiresIn) * 1000;
            token.expiresAt = Date.now() + Number(180) * 1000;
          }
        } catch (error) {
          console.error("Error refreshing token:", error);
          // Token refresh failed - user will need to sign in again
          return {};
        }
      }

      return token;
    },
  },
});
