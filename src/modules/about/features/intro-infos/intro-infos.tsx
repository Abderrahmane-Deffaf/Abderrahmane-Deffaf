import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export default function IntroInfos() {
  return (
    <div
      id="introduction"
      className=" flex flex-col gap-4 items-center lg:items-start"
    >
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
        Computer science student, full stack developer specializing in front-end
        development for over 3 years in the industry. Adept at collaborating
        with cross-functional teams and committed to delivering high-quality
        solutions.
      </p>
    </div>
  );
}
