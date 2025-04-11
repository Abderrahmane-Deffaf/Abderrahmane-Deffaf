import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Infos() {
  return (
    <div className=" space-y-4 lg:space-y-8">
      <h1 className=" w-full lg:w-[50%]">
        Full-Stack Developer and AI-DS student
      </h1>
      <p className=" w-full lg:w-[50%]">
        Computer science student, specializing in web development for over 3
        years in the industry. <br /> Adept at collaborating with
        cross-functional teams and committed to delivering high-quality
        solutions.
      </p>
      <Link
        className="rounded-3xl transition-all  duration-300  group flex hover:bg-neutral-500/30  bg-neutral-900 border border-muted hover:border-neutral-500 w-fit items-center py-1 px-1"
        href="/about"
      >
        <Avatar className=" border border-muted group-hover:border-neutral-500">
          <AvatarImage className=" scale-150 object-contain " src={me.src} />
          <AvatarFallback>A.Deffaf</AvatarFallback>
        </Avatar>
        <span className=" px-2 text-white font-medium ">About me</span>
        <div className="w-fit overflow-hidden">
          <ArrowRight className="w-0  -translate-x-5.5 group-hover:w-fit group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
}
