const links = [
  {
    name: "Introduction",
    href: "#introduction",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Studies",
    href: "#studies",
  },
  {
    name: "Skills",
    href: "#technical-skills",
  },
];
export default function SideNav() {
  return (
    <nav className=" hidden lg:block sticky top-[30%] left-0 h-full  p-4 ">
      <ul className=" space-y-4">
        {links.map((link) => (
          <li className=" " key={link.href}>
            <a className=" flex items-center gap-2" href={link.href}>
              <span className=" w-6 min-h-[2px] block bg-neutral-600 rounded-2xl "></span>
              <span className=" text-nowrap">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
