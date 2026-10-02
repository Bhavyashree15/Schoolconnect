"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState<"parent" | "student" | "school">("parent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Temporary navigation until authentication is connected.
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-5 py-10 text-[#0b1020]">
      <div className="mx-auto flex min-h-[90vh] max-w-md items-center justify-center">
        <div className="w-full rounded-[32px] bg-white p-7 shadow-[0_20px_60px_rgba(30,30,80,0.10)] sm:p-9">

          {/* Logo */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5138ee] text-2xl text-white shadow-lg shadow-[#5138ee]/20">
              🎓
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                SchoolConnect
              </h1>
              <p className="text-sm text-gray-500">
                School • Parents • Students
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-3xl font-bold tracking-tight">
              Welcome back
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to continue to SchoolConnect.
            </p>
          </div>

          {/* Role selector */}
          <div className="mb-7 grid grid-cols-3 gap-2 rounded-2xl bg-[#f1f2f8] p-1.5">
            {(["parent", "student", "school"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRole(item)}
                className={`rounded-xl px-2 py-3 text-sm font-semibold capitalize transition ${
                  role === item
                    ? "bg-white text-[#5138ee] shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl border border-gray-200 bg-[#fafaff] px-4 py-4 outline-none transition focus:border-[#5138ee] focus:ring-4 focus:ring-[#5138ee]/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-semibold text-[#5138ee]"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-2xl border border-gray-200 bg-[#fafaff] px-4 py-4 outline-none transition focus:border-[#5138ee] focus:ring-4 focus:ring-[#5138ee]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#5138ee] px-5 py-4 text-lg font-bold text-white shadow-lg shadow-[#5138ee]/20 transition hover:bg-[#4530d5] active:scale-[0.99]"
            >
              Sign in
              <span className="ml-2">→</span>
            </button>
          </form>

          {/* Demo note */}
          <div className="mt-6 rounded-2xl bg-[#f1f2ff] p-4 text-center text-sm text-gray-600">
            <span className="font-semibold text-[#5138ee]">
              {role === "parent"
                ? "Parent"
                : role === "student"
                ? "Student"
                : "School"}
            </span>{" "}
            access selected
          </div>

          {/* Back */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 w-full text-center text-sm font-semibold text-gray-500 hover:text-[#5138ee]"
          >
            ← Back to SchoolConnect
          </button>
        </div>
      </div>
    </main>
  );
}
