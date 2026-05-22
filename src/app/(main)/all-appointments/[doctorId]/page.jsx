import DoctorProfileClient from "@/app/components/DoctorProfileClient";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

export default async function DoctorProfilePage({ params }) {
  const { doctorId } = await params; 

  const cookieStore = await cookies();
  // Get the JWT token from the session_data cookie, or fallback to the session_token cookie
  let token = cookieStore.get("better-auth.session_data")?.value;
  if (!token) {
    token = cookieStore.get("better-auth.session_token")?.value;
  }

  console.log("Token in DoctorProfilePage Server Component:", token);

  const res = await fetch(`${apiBase}/doctors/${doctorId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  if (!res.ok) notFound();

  const doctor = await res.json();

  return <DoctorProfileClient doctor={doctor} doctorId={doctorId} />;
}
