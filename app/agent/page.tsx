import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SEOAgent from "@/components/sections/SEOAgent";
import AppNavBar from "@/components/AppNavBar";

export const metadata = {
  title: "Agent — Ryze AI",
};

export default async function AgentPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen">
      <AppNavBar />
      <SEOAgent />
    </main>
  );
}
