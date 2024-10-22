import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useState } from "react";

const navItems = [
  {
    name: "🏠 Home",
    route: "/",
    active: false,
  },
  {
    name: "📝 Blog",
    route: "/blog",
    active: false,
  },
  {
    name: "📕 Content",
    route: "/content",
    active: false,
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <div className="text-2xl cursor-default">🪴</div>
        {navItems.map((navItems) => (
          <NavigationMenuItem>
            <Link href={navItems.route} passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {navItems.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
