import React from "react";
import Link from "next/link";

export const FooterLinks = ({ title, links, className }) => {
  return (
    <div className={className}>
      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F3D08A]">{title}</h4>
      <ul className="space-y-1 text-xs">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="block py-1.5 text-stone-200 font-medium hover:text-[#F3D08A] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised rounded">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
