"use client";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();

  return (
    <nav className="relative text-white flex flex-col justify-between h-full p-8 ">
      {/* Bouton de fermeture */}
      <div
        className="cursor-pointer text-accent mb-6"
        onClick={() => setMobileNav(false)} // Ferme MobileNav
      >
        <IoCloseOutline className="text-4xl" />
      </div>

      {/* Liens de navigation */}
      <ul className="flex flex-col space-y-10 items-center">
        {links.map((link, index) => {
          const isActive = pathname === link.href; // Vérifie si le lien est actif
          return (
            <Link
              href={link.href}
              key={index}
              className={`block text-lg text-center transition-all duration-300 ${
                isActive
                  ? "border-b-2 border-secondary-100 inline-block" // Ajoute une bordure pour le lien actif
                  : "hover:text-secondary-100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>

      {/* Socials */}
      <Socials containerStyles="text-white text-ls flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
