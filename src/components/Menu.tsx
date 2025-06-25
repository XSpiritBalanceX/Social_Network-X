"use client";

import { PAGES } from "@/config/pages.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-white/80">
      {MENU.map((el) => (
        <MenuItem
          key={el.name}
          menuItem={el}
          isActive={!!match(el.href)(pathname)}
        />
      ))}
    </nav>
  );
}
