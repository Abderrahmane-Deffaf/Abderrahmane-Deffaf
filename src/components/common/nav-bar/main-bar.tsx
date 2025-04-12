import { BookMarked, CircleUser, House, Image } from "lucide-react";
import NavItem from "./nav-item";
/* 
{
    name: "blogs",
    href: "/blogs",
    icon: BookMarked,
    slug: "blogs",
  },
*/
const links = [
  {
    name: "Home",
    href: "/",
    icon: House,
    slug: null,
  },
  {
    name: "About",
    href: "/about",
    icon: CircleUser,
    slug: "about",
  },

  {
    name: "Certifications",
    href: "/certs",
    icon: Image,
    slug: "certs",
  },
];
export default function MainBar() {
  return (
    <div
      className=" flex relative gap-2 items-center rounded-2xl p-1
                    bg-white/20 backdrop-blur-md backdrop-filter
                    border border-white/30 shadow-lg transition duration-300"
    >
      {links.map((link) => (
        <NavItem
          slug={link.slug}
          href={link.href}
          name={link.name}
          key={link.href}
        >
          <link.icon size={16}></link.icon>
        </NavItem>
      ))}
    </div>
  );
}
