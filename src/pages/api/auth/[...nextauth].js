import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECRET } = process.env;
const { MS_OAUTH_SCOPE, MS_CLIENT_ID, MS_CLIENT_SECRET } = process.env;

// env.local へ登録されているかを確認
if (!GOOGLE_CLIENT_ID)
  throw new Error("You must provide GOOGLE_CLIENT_ID env var.");
if (!GOOGLE_CLIENT_SECRET)
  throw new Error("You must provide GOOGLE_CLIENT_SECRET env var.");
if (!SECRET) throw new Error("You must provide SECRET env var.");

if (!MS_OAUTH_SCOPE)
  throw new Error("You must provide MS_OAUTH_SCOPE env var.");
if (!MS_CLIENT_ID) throw new Error("You must provide MS_CLIENT_ID env var.");
if (!MS_CLIENT_SECRET)
  throw new Error("You must provide MS_CLIENT_SECRET env var.");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    {
      id: "microsoft",
      name: "Microsoft",
      type: "oauth",
      version: "2.0",
      scope: MS_OAUTH_SCOPE,
      params: { grant_type: "authorization_code" },
      accessTokenUrl: `https://login.microsoftonline.com/common/oauth2/v2.0/token`,
      authorizationUrl: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&response_mode=query`,
      profileUrl: "https://graph.microsoft.com/v1.0/me",
      profile: (profile) => {
        return {
          id: profile.id ?? "",
          email: profile.userPrincipalName ?? "",
          name: profile.displayName ?? "",
          image: "https://graph.microsoft.com/v1.0/me/photo/$value",
        };
      },
      clientId: MS_CLIENT_ID,
      clientSecret: process.env.MS_CLIENT_SECRET,
    },
  ],
  secret: process.env.SECRET,
  redirect: async (url, _baseUrl) => {
    if (url === "/user") {
      return Promise.resolve("/");
    }
    return Promise.resolve("/");
  },
});
