import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  secret: process.env.SECRET,

  // 重大TODO
  // callbackのasync jwtの実装を修正し、user情報を正しく取得せよ!

  /*
  callbacks: {
    async jwt(token, account, user) {
      console.log(`account:${JSON.stringify(user)}`);
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.user = user;
      }
      return token;
    },
  },
  */
});

/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { environment } from "../../../../env";

const { GOOGLE_ID, GOOGLE_SECRET, SECRET } = environment;

if (!GOOGLE_ID) throw new Error("You must provide GOOGLE_ID env var.");
if (!GOOGLE_SECRET) throw new Error("You must provide GOOGLE_SECRET env var.");
if (!SECRET) throw new Error("You must provide SECRET env var.");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: SECRET,

  callbacks: {
    async jwt(token, account) {
      console.log(`account:${JSON.stringify(account)}`);
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session({ session, token, _user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    signIn: async (user, account, profile) => {
      console.log("signin", { user, account, profile });
      return Promise.resolve(true);
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/user") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
*/
