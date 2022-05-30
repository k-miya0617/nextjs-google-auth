import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";

// Googleのアカウントのログイン時に使う環境変数の取得
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECRET } = process.env;

// Azureのアカウントのログイン時に使う環境変数の取得
const { AZURE_AD_CLIENT_ID, AZURE_AD_CLIENT_SECRET, AZURE_AD_TENANT_ID } =
  process.env;

// 各環境変数の存在確認
if (!GOOGLE_CLIENT_ID)
  throw new Error("You must provide GOOGLE_CLIENT_ID env var.");
if (!GOOGLE_CLIENT_SECRET)
  throw new Error("You must provide GOOGLE_CLIENT_SECRET env var.");
if (!SECRET) throw new Error("You must provide SECRET env var.");

if (!AZURE_AD_CLIENT_ID)
  throw new Error("You must provide AZURE_AD_CLIENT_ID env var.");
if (!AZURE_AD_CLIENT_SECRET)
  throw new Error("You must provide AZURE_AD_CLIENT_SECRET env var.");
if (!AZURE_AD_TENANT_ID)
  throw new Error("You must provide AZURE_AD_TENANT_ID env var.");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    AzureADProvider({
      clientId: AZURE_AD_CLIENT_ID,
      clientSecret: AZURE_AD_CLIENT_SECRET,
      tenantId: AZURE_AD_TENANT_ID,
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
