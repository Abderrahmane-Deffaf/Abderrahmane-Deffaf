import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpg";
import Link from "next/link";
import Projects from "./components/projects";
export default function MainScreen() {
  return (
    <div className="  ">
      <div className=" wrapper py-8 space-y-16 lg:space-y-32 lg:py-16">
        <div className=" space-y-4 lg:space-y-8">
          <h1 className=" w-full lg:w-[50%]">
            Frontend Developer and AI-DS student
          </h1>
          <p className=" w-full lg:w-[50%]">
            Computer science student, specializing in front-end web development
            for over 3 years in the industry. Adept at collaborating with
            cross-functional teams and committed to delivering high-quality
            solutions.
          </p>
          <Link
            className="rounded-3xl flex  bg-neutral-900 border border-muted w-fit items-center py-1 px-1"
            href="/about"
          >
            <Avatar className=" border border-muted">
              <AvatarImage
                className=" scale-150 object-contain "
                src={me.src}
              />
              <AvatarFallback>A.Deffaf</AvatarFallback>
            </Avatar>
            <span className=" px-2 text-white font-medium ">About me</span>
          </Link>
        </div>
        <Projects />
      </div>
    </div>
  );
}
