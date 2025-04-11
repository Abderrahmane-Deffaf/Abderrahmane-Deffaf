import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpg";
import world from "@/assets/world.svg";
import Image from "next/image";
import InfoElement from "@/components/ui/info-element";

export default function ProfilePicture() {
  return (
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
  );
}
