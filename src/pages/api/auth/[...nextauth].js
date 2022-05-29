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
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: SECRET,

  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/user") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
