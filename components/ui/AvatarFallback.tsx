import {getInitials, getAvatarGradient} from "@/lib/drive";
import {cn} from "@/lib/utils";

interface AvatarFallbackProps {
  name: string;
  className?: string;
  textClassName?: string;
}

export function AvatarFallback({
  name,
  className,
  textClassName,
}: AvatarFallbackProps) {
  const initials = getInitials(name);
  const [from, to] = getAvatarGradient(name);

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full select-none",
        className,
      )}
      style={{background: `linear-gradient(135deg, ${from}, ${to})`}}
      aria-label={`Avatar ${name}`}
    >
      <span
        className={cn(
          "font-heading font-bold text-white tracking-wide",
          textClassName ?? "text-xl",
        )}
      >
        {initials}
      </span>
    </div>
  );
}
