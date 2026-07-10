import React from "react";
import Link from "next/link";

export const FooterLinks = ({ title, links, className }) => {
  return (
    <div className={className}>
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A86C]">{title}</h4>
      <ul className="space-y-1 text-xs">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="block py-1.5 text-white/80 hover:text-white transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
