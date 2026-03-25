import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "success" | "warning" | "danger" }) {
  const v = variant ?? "default";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        v === "default" && "border-slate-200 bg-white text-slate-900",
        v === "success" && "border-emerald-200 bg-emerald-50 text-emerald-800",
        v === "warning" && "border-amber-200 bg-amber-50 text-amber-800",
        v === "danger" && "border-rose-200 bg-rose-50 text-rose-800",
        className
      )}
      {...props}
    />
  );
}

