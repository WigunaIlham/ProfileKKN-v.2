import {cn} from "@/lib/utils";
import Image from "next/image";
import logoImage from "@/src/logo.png";

interface KKNLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
}

const sizeMap = {
  sm: {logo: 40, text: "text-sm"},
  md: {logo: 56, text: "text-base"},
  lg: {logo: 88, text: "text-xl"},
  xl: {logo: 128, text: "text-2xl"},
};

export function KKNLogo({
  size = "md",
  className,
  showText = false,
}: KKNLogoProps) {
  const {logo, text} = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          width: logo,
          height: logo,
        }}
      >
        <Image
          src={logoImage}
          alt="Logo KKN Desa Jamali"
          fill
          priority
          className="object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-bold", text)}>JamaLights 206</span>

          <span className="text-xs text-muted-foreground">
            Desa Jamali, Cianjur
          </span>
        </div>
      )}
    </div>
  );
}
