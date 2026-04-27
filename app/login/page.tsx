import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import LoginSections from "@/components/sections/LoginSections";

export const metadata = {
  title: "Sign in — Ryze AI",
};

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/agent");
  }

  return <LoginSections />;
}
