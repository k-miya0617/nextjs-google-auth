import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECRET } = process.env;

// env.local へ登録されているかを確認
if (!GOOGLE_CLIENT_ID)
  throw new Error("You must provide GOOGLE_CLIENT_ID env var.");
if (!GOOGLE_CLIENT_SECRET)
  throw new Error("You must provide GOOGLE_CLIENT_SECRET env var.");
if (!SECRET) throw new Error("You must provide SECRET env var.");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  secret: process.env.SECRET,
  redirect: async (url, _baseUrl) => {
    if (url === "/user") {
      return Promise.resolve("/");
    }
    return Promise.resolve("/");
  },
});
