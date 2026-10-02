import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
        <GraduationCap size={24} strokeWidth={2} />
      </div>

      <div>
        <div className="text-lg font-bold tracking-tight text-gray-900">
          SchoolConnect
        </div>
        <div className="text-xs text-gray-500">
          School • Parents • Students
        </div>
      </div>
    </div>
  );
}
