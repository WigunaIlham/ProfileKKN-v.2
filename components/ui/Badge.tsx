import {cn} from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "default";
  className?: string;
}

const variantStyles = {
  primary:
    "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
  secondary: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  accent:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  success:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  warning:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export function Badge({children, variant = "default", className}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
