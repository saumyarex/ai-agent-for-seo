import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import RegisterSection from "@/components/sections/RegisterSection";

export const metadata = {
  title: "Create account — Ryze AI",
};

export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/agent");
  }

  return <RegisterSection />;
}
