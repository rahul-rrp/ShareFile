// components/Logo.tsx

import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width = 180,
  height = 60,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/assets/images/saltstayz_logo.svg"
        alt="SaltStayz Logo"
        width={width}
        height={height}
        priority
        className="w-[160.42px] h-[20px] object-contain"
      />
    </Link>
  );
}