import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// This route reads the session from Better Auth and returns the official database session token
// so client components can forward it to the Express backend.
export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    console.log("Session in auth-token route:", session);

    if (!session || !session.session?.token) {
      return Response.json({ token: null }, { status: 401 });
    }

    return Response.json({ token: session.session.token });
  } catch (error) {
    console.error("Error in auth-token route:", error);
    return Response.json({ token: null }, { status: 500 });
  }
}

