"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

const Header = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Recipe Search", href: "/" },
    { label: "View Favorite List", href: "/favorites" },
    { label: "About", href: "/about" },
  ]

  return (
    <nav className="flex space-x-11 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-5">
        {links.map(link => 
          <Link
            key={link.href}
            className={classNames({
              "text-green-700": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-green-600 transition-colors" : true
            })}
            href={link.href}>{link.label}
          </Link>
          )}
      </ul>
    </nav>
  )
}

export default Header;