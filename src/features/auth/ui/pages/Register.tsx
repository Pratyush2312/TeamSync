import { useState } from "react";

import {
  User,
  Mail,
  LockKeyhole,
  Sparkles,
  Network,
  Eye,
  EyeOff,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

// Types
interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

// Brand Logo
function BrandLogo() {
  return (
    <span className="text-sm font-semibold tracking-tight text-white">
      TeamSync
    </span>
  );
}

// Neural Network Background
function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#10182c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_45%,#24466b_0%,#111d35_48%,#10111d_100%)]" />

      <svg
        viewBox="0 0 600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-80"
        fill="none">
        <defs>
          <linearGradient id="network" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#426b9d" />
            <stop offset="1" stopColor="#182c4d" />
          </linearGradient>

          <radialGradient id="glow">
            <stop stopColor="#8e78da" stopOpacity=".5" />
            <stop offset="1" stopColor="#8e78da" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="270" cy="420" r="230" fill="url(#glow)" />

        {Array.from({ length: 34 }, (_, i) => {
          const x = (i * 79) % 600;
          const y = (i * 137) % 900;
          const endX = (x + 170 + i * 13) % 600;
          const endY = (y + 240 + i * 17) % 900;

          return (
            <g key={i}>
              <path
                d={`M ${x} ${y} Q ${(x + endX) / 2 + 70} ${(y + endY) / 2 - 100} ${endX} ${endY}`}
                stroke="url(#network)"
                strokeWidth={i % 3 === 0 ? "2" : "1"}
                opacity=".7"
              />

              <circle
                cx={x}
                cy={y}
                r={i % 4 === 0 ? "2.5" : "1.5"}
                fill="#718bc2"
              />
            </g>
          );
        })}

        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M ${-80 + i * 65} 250 Q ${150 + i * 20} ${350 + i * 15} 650 ${100 + i * 60}`}
            stroke="#5982b3"
            strokeWidth="1.4"
            opacity=".35"
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-transparent to-[#10111d]/30" />
    </div>
  );
}

// Left Hero Panel
function HeroPanel() {
  return (
    <section className="relative hidden min-h-full flex-col justify-between overflow-hidden border-r border-white/5 p-8 lg:flex">
      <NeuralBackground />

      <div className="relative z-10">
        <BrandLogo />
      </div>

      <div className="relative z-10 max-w-md pb-3">
        <div className="mb-5 flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-white">
          <Sparkles size={14} />
          NEXT-GEN INTELLIGENCE
        </div>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white">
          Accelerate your team's intelligence.
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#c1c7d3]">
          Connect your enterprise data to our specialized AI models and unlock
          unparalleled strategic insights in seconds.
        </p>

        <div className="mt-8 flex gap-10">
          <div>
            <p className="text-lg font-medium text-white">99.9%</p>
            <p className="text-[10px] text-[#aaaebc]">Uptime SLA</p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">ISO</p>
            <p className="text-[10px] text-[#aaaebc]">27001 Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Registration Form
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, navigate } = useAuth();
  const { register, handleSubmit, isSubmitting, watch, onRegister, errors } =
    registerUser;

  const password = watch("password");

    // Password strength
  const strength =
    password?.length >= 12
      ? 3
      : password?.length >= 8
        ? 2
        : password?.length >= 4
          ? 1
          : 0;

  const strengthLabel = [
    "",
    "Weak password",
    "Good password",
    "Strong password",
  ][strength];

  

  const inputClass =
    "w-full rounded-md border border-[#41404a] bg-[#1d1b21] py-3 pl-10 pr-10 text-sm text-white placeholder:text-[#625e6a] outline-none transition focus:border-[#a88ae9] focus:ring-1 focus:ring-[#a88ae9]/40";

  const errorClass = "mt-1 text-[11px] text-red-400";

  return (
    <div className="w-full max-w-[400px]">
      {/* Heading */}
      <div className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Create your account
        </h1>

        <p className="mt-1 text-xs text-[#aaa5b3]">
          Experience the future of collaborative data intelligence.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onRegister)}
        noValidate
        className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-xs font-medium text-white">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77717f]" />

            <input
              type="text"
              placeholder="Enter your full name"
              className={inputClass}
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must contain at least 3 characters",
                },
              })}
            />
          </div>

          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-xs font-medium text-white">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77717f]" />

            <input
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

          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-xs font-medium text-white">
            Password
          </label>

          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#77717f]" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className={inputClass}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
                validate: {
                  hasNumber: (value) =>
                    /\d/.test(value) || "Password must contain a number",

                  hasLetter: (value) =>
                    /[a-zA-Z]/.test(value) || "Password must contain a letter",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77717f] hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Strength Indicator */}
          <div className="mt-2 flex gap-1">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className={`h-[3px] flex-1 rounded-full transition-colors ${
                  strength >= level ? "bg-[#b69af2]" : "bg-[#302d35]"
                }`}
              />
            ))}
          </div>

          <p className="mt-1 text-[11px] text-[#c1a9ff]">{strengthLabel}</p>

          {errors.password && (
            <p className={errorClass}>{errors.password.message}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        {/* <div>
          <label className="flex cursor-pointer items-center gap-2 text-xs text-[#c5c0cb]">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-[#a98be9]"
              {...register("acceptedTerms", {
                required: "You must accept the terms",
              })}
            />

            <span>
              I agree to the{" "}
              <a href="#" className="text-white hover:text-[#c2a8ff]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-white hover:text-[#c2a8ff]">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {errors.acceptedTerms && (
            <p className={errorClass}>{errors.acceptedTerms.message}</p>
          )}
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-gradient-to-r from-[#8060b9] to-[#c6aaf6] py-3 text-sm font-medium text-[#17121e] transition hover:brightness-110 active:scale-[.99] disabled:opacity-50">
          {isSubmitting ? "Creating account..." : "Create Account"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#29262e]" />

        <span className="text-[9px] tracking-widest text-[#77717f]">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-[#29262e]" />
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-[#41404a] py-3 text-xs text-white transition hover:bg-[#24212a]">
          <span className="font-bold text-[#e5a34b]">G</span>
          Google
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-[#41404a] py-3 text-xs text-white transition hover:bg-[#24212a]">
          <Network size={15} />
          SSO
        </button>
      </div>

      {/* Login */}
      <p className="mt-8 text-center text-xs text-[#c5c0cb]">
        Already have an account?{" "}
        <button onClick={()=>navigate('/')} className="font-semibold text-[#c6a5ff] hover:underline">
          Log In
        </button>
      </p>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/5 bg-[#141217] px-6 py-5 text-[10px] text-[#aaa5b3] sm:flex-row lg:px-8">
      <BrandLogo />

      <nav className="flex flex-wrap justify-center gap-5">
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>
        <a href="#" className="hover:text-white">
          Security
        </a>
        <a href="#" className="hover:text-white">
          System Status
        </a>
      </nav>

      <p>© 2026 TeamSync. Enterprise Intelligence Platforms.</p>
    </footer>
  );
}

// Main Register Page
export default function Register() {
  return (
    <main className="min-h-screen bg-[#141217] font-sans text-white">
      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-2">
        <HeroPanel />

        <section className="flex min-h-[700px] items-center justify-center px-6 py-16 lg:min-h-0 lg:px-12">
          <RegisterForm />
        </section>
      </div>

      <Footer />
    </main>
  );
}
