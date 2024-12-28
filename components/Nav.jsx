import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              className={`uppercase transition-all duration-300 ${
                isActive
                  ? "border-b-2 border-secondary-100 "
                  : "hover:text-secondary-100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;