"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, User, ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";

type RegisterValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.3 0-11.5-5.2-11.5-11.5S17.7 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 16.3 4.5 9.7 8.8 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.7 13-4.6l-6-5c-2 1.4-4.4 2.1-7 2.1-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.6 39 16.2 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.4 4.3-4.3 5.6l6 5c4.2-3.9 6.5-9.6 6.5-15.6 0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function RegisterSection() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>();

  const password = watch("password");

  const onSubmit = async (values: RegisterValues) => {
    const { error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      callbackURL: "/agent",
    });
    if (error) {
      setError("root", { message: error.message ?? "Failed to create account." });
      return;
    }
    router.push("/agent");
  };

  const onGoogle = async () => {
    setGoogleLoading(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/agent",
    });
    if (error) {
      setError("root", { message: error.message ?? "Google sign-in failed." });
      setGoogleLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-black/10 bg-white/72 p-8 shadow-sm backdrop-blur-md"
      >
        <div className="mb-6 flex flex-col gap-1.5 text-center">
          <h1 className="text-2xl font-semibold text-[#141414]">
            Create your account
          </h1>
          <p className="text-sm text-neutral-500">
            Start running SEO instead of doing it.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Name"
            type="text"
            placeholder="Jane Doe"
            rightIcon={User}
            autoComplete="name"
            error={errors.name?.message}
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "Too short." },
            })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            rightIcon={Mail}
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email.",
              },
            })}
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 8 characters"
            rightIcon={showPassword ? EyeOff : Eye}
            onRightIconClick={() => setShowPassword((v) => !v)}
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required.",
              minLength: { value: 8, message: "At least 8 characters." },
            })}
          />

          <Input
            label="Confirm password"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter password"
            rightIcon={showConfirm ? EyeOff : Eye}
            onRightIconClick={() => setShowConfirm((v) => !v)}
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Please confirm your password.",
              validate: (value) =>
                value === password || "Passwords do not match.",
            })}
          />

          {errors.root?.message && (
            <p className="rounded-md border border-red-500/30 bg-red-50 px-3 py-2 text-sm text-red-600">
              {errors.root.message}
            </p>
          )}

          <Button
            title={isSubmitting ? "Creating..." : "Create account"}
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            rightIcon={ArrowRight}
            className="w-full justify-center"
          />
        </form>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-xs uppercase tracking-wider text-neutral-500">
            or continue with
          </span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        <button
          type="button"
          onClick={onGoogle}
          disabled={googleLoading}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/72 px-4 text-base text-[#141414] backdrop-blur-md transition hover:bg-white disabled:opacity-60"
        >
          <GoogleIcon size={18} />
          <span>{googleLoading ? "Redirecting..." : "Continue with Google"}</span>
        </button>

        <p className="mt-6 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#141414] underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

export default RegisterSection;
