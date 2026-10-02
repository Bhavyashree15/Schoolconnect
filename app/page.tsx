import {
  ArrowRight,
  BookOpen,
  FileText,
  MessageCircle,
  ShieldCheck,
  Video
} from "lucide-react";

import Logo from "@/components/Logo";

const features = [
  {
    icon: FileText,
    title: "Academic Records",
    description:
      "Keep results, exams and your child's academic journey organized."
  },
  {
    icon: BookOpen,
    title: "Daily Homework",
    description:
      "Know what your child needs to learn and complete every day."
  },
  {
    icon: MessageCircle,
    title: "Parent–Teacher Connect",
    description:
      "Create a direct and structured channel between parents and teachers."
  },
  {
    icon: Video,
    title: "Classroom Safety",
    description:
      "A secure school-controlled classroom camera experience."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#features" className="transition hover:text-indigo-600">
            Features
          </a>

          <a href="#vision" className="transition hover:text-indigo-600">
            Our Vision
          </a>

          <a
            href="/login"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-white transition hover:bg-gray-700"
          >
            School Login
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <ShieldCheck size={16} />
            A secure connection between school and home
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 sm:text-6xl">
            Your child's
            <span className="block text-indigo-600">
              school journey,
            </span>
            all in one place.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            SchoolConnect brings academic performance, homework, answer
            sheets, teacher communication and school memories together in one
            secure platform.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Enter SchoolConnect
              <ArrowRight size={18} />
            </a>

            <a
              href="#vision"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Explore the vision
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>✓ Student records</span>
            <span>✓ Results</span>
            <span>✓ Answer sheets</span>
            <span>✓ Parent communication</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-200/70">
            <div className="rounded-2xl bg-gray-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Parent Dashboard</p>
                  <h2 className="mt-1 text-xl font-semibold">
                    Good morning 👋
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-semibold">
                  AS
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-white p-5 text-gray-900">
                <p className="text-sm text-gray-500">Student</p>
                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Aaradhya Sharma</h3>
                    <p className="text-sm text-gray-500">
                      Class 5 • Section A
                    </p>
                  </div>

                  <div className="rounded-xl bg-indigo-50 px-3 py-2 text-center">
                    <div className="text-xl font-bold text-indigo-600">
                      87%
                    </div>
                    <div className="text-xs text-gray-500">Overall</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gray-900 p-4 ring-1 ring-white/10">
                  <FileText className="text-indigo-400" size={20} />
                  <p className="mt-3 text-sm font-medium">
                    Latest Result
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Semester 1
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-900 p-4 ring-1 ring-white/10">
                  <BookOpen className="text-indigo-400" size={20} />
                  <p className="mt-3 text-sm font-medium">
                    Homework
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    3 assignments
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-gray-900 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-indigo-400" size={20} />
                  <div>
                    <p className="text-sm font-medium">
                      Teacher update
                    </p>
                    <p className="text-xs text-gray-400">
                      Please practice fractions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-gray-100 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-semibold text-indigo-600">
              Everything connected
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              More than a school portal.
            </h2>

            <p className="mt-4 text-gray-600">
              A single digital space connecting the people and information
              that matter throughout a child's school journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8"
      >
        <p className="font-semibold text-indigo-600">Our vision</p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          From the first answer sheet to the final school day.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Every result, achievement, teacher interaction and academic memory
          can become part of a child's lifelong school archive.
        </p>
      </section>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Logo />
          <p>© 2026 SchoolConnect POC</p>
        </div>
      </footer>
    </main>
  );
}
