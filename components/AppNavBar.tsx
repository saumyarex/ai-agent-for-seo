"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function AppNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
  });

  useEffect(() => {
    const unsubscribe = smoothScrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [smoothScrollY]);

  const handleLogout = async () => {
    setIsSigningOut(true);
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 px-5 py-3 sm:px-9 md:px-14 lg:px-20"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.a
          href="/agent"
          className="flex items-center gap-3"
          aria-label="Ryze home"
          animate={{ scale: isScrolled ? 0.95 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Image
              src={"/main-logo-sun-2.png"}
              width={35}
              height={35}
              alt="Ryze Logo"
            />
          </motion.div>
          <motion.span
            className="text-lg font-bold text-black sm:text-3xl"
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Ryze
          </motion.span>
        </motion.a>

        <motion.button
          onClick={handleLogout}
          disabled={isSigningOut}
          className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60 sm:px-5"
          animate={{ scale: isScrolled ? 0.92 : 1 }}
          whileHover={{ scale: isSigningOut ? 1 : 1.02 }}
          whileTap={{ scale: isSigningOut ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          aria-label="Log out"
        >
          <span className="pointer-events-none absolute inset-y-1 -left-10 w-10 rounded-full bg-white/40 opacity-0 blur-md transition-all duration-500 ease-out group-hover:left-[calc(100%+0.5rem)] group-hover:opacity-100" />
          <span className="relative z-10">
            {isSigningOut ? "Logging out..." : "Log out"}
          </span>
          <LogOut
            size={16}
            className="relative z-10 transition-all duration-200 group-hover:translate-x-0.5"
          />
        </motion.button>
      </div>
    </motion.header>
  );
}

export default AppNavBar;
