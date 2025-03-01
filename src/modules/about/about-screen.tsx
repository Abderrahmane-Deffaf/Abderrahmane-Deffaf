import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpg";
import world from "@/assets/world.svg";
import Image from "next/image";
import InfoElement from "@/components/ui/info-element";
import Work from "./features/work/work";
import Studies from "./features/studies/studies";
import Technical from "./features/technical/technical";
export default function AboutScreen() {
  return (
    <section>
      <div className=" wrapper py-16 space-y-16">
        <div className=" flex gap-4 justify-center items-center flex-col">
          <Avatar className=" size-36 border border-muted">
            <AvatarImage className=" scale-150 object-contain " src={me.src} />
            <AvatarFallback>A.Deffaf</AvatarFallback>
          </Avatar>
          <p className=" flex gap-1 text-center  text-white">
            <Image className=" size-6" src={world} alt="world" />
            Deffaf/Abderrahmane
          </p>
          <div className=" flex gap-2">
            {["Arabic", "English", "French"].map((lang) => (
              <InfoElement key={lang} topic={lang} />
            ))}
          </div>
          <p className=" text-center text-white">
            Computer science student, specializing in front-end web development
            for over 3 years in the industry. Adept at collaborating with
            cross-functional teams and committed to delivering high-quality
            solutions.
          </p>
        </div>
        <Work />
        <Studies />
        <Technical />
      </div>
    </section>
  );
}
