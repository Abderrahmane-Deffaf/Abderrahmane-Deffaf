import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import mail from "@/assets/mail.svg";
import Image from "next/image";

const socials = [
  {
    name: "Github",
    url: "https://github.com/Abderrahmane-Deffaf",
    icon: github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abderrahmene-deffaf-180598257/",
    icon: linkedin,
  },
  {
    name: "Mail",
    url: "mailto:a_deffaf@estin.com",
    icon: mail,
  },
];
export default function Footer() {
  return (
    <footer className="pb-24 relative z-10">
      <div className=" wrapper flex flex-col lg:flex-row lg:justify-between  items-center justify-center gap-y-8">
        <p className=" text-center ">
          &copy; 2025 / <span>Deffaf Abderrahmane</span> / All rights reserved.
        </p>
        <div className=" flex space-x-4">
          {socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={social.name}
            >
              <Image
                className=" size-10 "
                src={social.icon}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
