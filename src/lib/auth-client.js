import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

export const { useSession, signIn, signUp, signOut } = authClient;


// import { useSession, signIn, signUp, signOut } from "@/lib/auth-client";