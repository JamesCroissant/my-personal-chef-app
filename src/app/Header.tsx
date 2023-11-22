import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    { label: "Recipe Search", href: "/" },
    { label: "View Favorite List", href: "/favorites" },
    { label: "About", href: "/about" },
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map(link => 
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-green-600 transition-colors" 
            href={link.href}>{link.label}</Link>
          )}
      </ul>
    </nav>
  )
}

export default Header;