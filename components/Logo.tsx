import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Logo({ className, width = 132, height = 96, priority }: LogoProps) {
  return (
    <Image
      src="/logo.webp"
      alt="Phở Gà An Nam — Authentic Vietnamese Cuisine"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
