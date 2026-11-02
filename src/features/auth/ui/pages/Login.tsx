import { useState } from "react";

import {
  Network,
  Cloud,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

    const { loginUser, navigate } = useAuth();
    const {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onLogin
    } = loginUser;

 

  const inputClass =
    "w-full rounded-md border border-[#35313b] bg-[#100f14] py-3 pl-10 pr-10 text-xs text-white placeholder:text-[#625d69] outline-none transition focus:border-[#9875df] focus:ring-1 focus:ring-[#9875df]/30";

  const errorClass = "mt-1 text-[10px] text-red-400";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#141217] px-5 py-12 font-sans text-white">
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#45316c]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#57418c]/10 blur-[120px]" />

      {/* Login Card */}
      <section className="relative z-10 w-full max-w-[400px] rounded-xl border border-[#302b36] bg-[#1d1b21] px-7 py-8 shadow-2xl shadow-black/30">
        {/* Brand */}
        <div className="mb-7 flex flex-col items-center">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-[#a78bfa]/30 bg-[#7052b5] shadow-lg shadow-purple-900/20">
            <Network size={23} className="text-white" />
          </div>

          <h1 className="text-xl font-semibold tracking-tight">TeamSync</h1>

          <p className="mt-1 text-xs text-[#a7a1ae]">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-[#37323d] bg-[#29262e] py-3 text-[11px] font-medium text-white transition hover:bg-[#35313b]">
            <Cloud size={15} />
            GOOGLE
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-[#37323d] bg-[#29262e] py-3 text-[11px] font-medium text-white transition hover:bg-[#35313b]">
            {/* <Github size={15} /> */}
            GITHUB
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#302c35]" />

          <span className="text-[10px] text-[#aaa3b0]">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-[#302c35]" />
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onLogin)}
          noValidate
          className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[10px] font-semibold tracking-wide text-[#e5e0e9]">
              EMAIL ADDRESS
            </label>

            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#77717f]"
              />

              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className={inputClass}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[10px] font-semibold tracking-wide text-[#e5e0e9]">
                PASSWORD
              </label>

              <a
                href="/forgot-password"
                className="text-[10px] text-[#c2a5ff] transition hover:text-white">
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <LockKeyhole
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#77717f]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={inputClass}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain at least 8 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77717f] transition hover:text-white">
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me */}
          <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[#c3bdc9]">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-[#49434f] accent-[#9270d0]"
              {...register("remember")}
            />
            Stay signed in
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#7253b5] py-3 text-xs font-medium text-white shadow-lg shadow-purple-950/20 transition hover:bg-[#8465c8] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? "Signing in..." : "Sign In"}

            <LogIn size={14} />
          </button>
        </form>

        {/* Signup */}
        <div className="mt-6 border-t border-[#302c35] pt-5 text-center">
          <p className="text-[11px] text-[#c3bdc9]">
            Don't have an account?{" "}
            <button
             onClick={()=>navigate('/register')}
              className="font-semibold text-[#c2a5ff] transition hover:text-white">
              Sign Up
            </button>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-5 flex flex-col items-center gap-2 text-center">
        <p className="text-[10px] text-[#716c78]">
          © 2026 TeamSync. Collaborative Intelligence Platform.
        </p>

        <div className="flex gap-5 text-[10px] text-[#716c78]">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>

          <a href="/terms" className="transition hover:text-white">
            Terms of Service
          </a>
        </div>
      </footer>

      {/* Decorative abstract artwork */}
      <div className="pointer-events-none absolute bottom-16 right-12 hidden h-36 w-36 items-center justify-center overflow-hidden rounded-xl bg-[#100e16] opacity-50 xl:flex">
        <div className="absolute h-24 w-24 rotate-45 rounded-[35%] border border-[#7052a0]/40 shadow-[0_0_30px_rgba(112,82,160,0.2)]" />

        <div className="absolute h-20 w-28 -rotate-12 rounded-[45%] border border-[#8d70bb]/30" />

        <div className="absolute h-16 w-24 rotate-12 rounded-[40%] border border-[#7052a0]/40" />

        <Network size={35} className="text-[#9676c5]/50" />
      </div>
    </main>
  );
}
