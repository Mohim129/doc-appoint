import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("docappoint");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },


  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
    // expiresIn: 7 * 24 * 60 * 60,
    // updateAge: 24 * 60 * 60,
  },
  plugins: [
    jwt()
  ],
});
// 