"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  function getLinkClassName(path: string) {
    return pathname === path
      ? "font-bold text-primary"
      : "text-muted-foreground";
  }

  return (
    <div className="flex justify-between px-8 py-4 border-b border-solid">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />

        <Link href="/" className={getLinkClassName("/")}>
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={getLinkClassName("/transactions")}
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={getLinkClassName("/subscription")}
        >
          Assinatura
        </Link>
      </div>

      <UserButton showName />
    </div>
  );
}
