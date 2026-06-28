import {cn} from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  rounded?: string;
}

export function ImageSkeleton({
  className,
  rounded = "rounded-2xl",
}: ImageSkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700",
        rounded,
        className,
      )}
      aria-hidden="true"
    />
  );
}
