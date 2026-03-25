import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string | ReactNode;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <div className="mb-2 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

