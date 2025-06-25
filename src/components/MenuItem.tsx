import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface MenuItemProps {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: MenuItemProps) {
  return (
    <Link
      className={isActive ? "text-white" : "text-white/80"}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  );
}
