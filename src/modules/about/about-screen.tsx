import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpg";
import world from "@/assets/world.svg";
import Image from "next/image";
import InfoElement from "@/components/ui/info-element";
import Work from "./features/work/work";
import Studies from "./features/studies/studies";
import Technical from "./features/technical/technical";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

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
export default function AboutScreen() {
  return (
    <section>
      <div className=" wrapper py-16 relative lg:flex lg:items-start lg:gap-16 space-y-8">
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
        <div className=" lg:sticky lg:top-[20%] flex gap-4 justify-center items-center flex-col">
          <Avatar className=" size-36 border border-muted">
            <AvatarImage className=" scale-150 object-contain " src={me.src} />
            <AvatarFallback>A.Deffaf</AvatarFallback>
          </Avatar>
          <p className=" flex gap-1 text-center  text-white">
            <Image className=" size-6" src={world} alt="world" />
            Algeria/BBA
          </p>
          <div className=" flex gap-2">
            {["Arabic", "English", "French"].map((lang) => (
              <InfoElement key={lang} topic={lang} />
            ))}
          </div>
        </div>
        <div id="introduction" className=" flex flex-col gap-8 lg:gap-16">
          <div className=" flex flex-col gap-4 items-center lg:items-start">
            <Link
              href={"mailto:a_deffaf@estin.dz"}
              className=" border flex items-center border-green-700  bg-green-600/20 w-fit rounded-4xl py-2 px-3  gap-2"
            >
              <Mail color="green" />
              Send me an email
              <div className=" flex items-center justify-center bg-neutral-900 border border-neutral-700 rounded-2xl">
                <ChevronRight />
              </div>
            </Link>
            <h1>Deffaf Abderrahmane</h1>
            <p>Full Stack Developer</p>
            <p className=" text-center lg:text-left text-white">
              Computer science student, full stack developer specializing in
              front-end development for over 3 years in the industry. Adept at
              collaborating with cross-functional teams and committed to
              delivering high-quality solutions.
            </p>
          </div>
          <Work />
          <Studies />
          <Technical />
        </div>
      </div>
    </section>
  );
}
