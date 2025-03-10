import microHack from "@/assets/gallery/micro-hack-micoclub.jpeg";
import nasaSpaceApps from "@/assets/gallery/nasa-space-apps-micoclub.jpeg";
import devUnlocked1 from "@/assets/gallery/dev-unlocked-soai-1.jpg";
import devUnlocked2 from "@/assets/gallery/dev-unlocked-soai-2.jpg";
import Image from "next/image";

const images1 = [devUnlocked2];
const images2 = [microHack, nasaSpaceApps];
const images3 = [devUnlocked1];

export default function GalleryScreen() {
  return (
    <div>
      <div className="wrapper flex gap-4 flex-wrap justify-between h-full  py-16 px-8 ">
        <div className="basis-full h-full md:basis-[30%] flex flex-col gap-4">
          {images1.map((image) => (
            <Image
              key={image.src}
              className=" min-w-full  rounded-3xl min-h-full "
              src={image}
              alt="gallery image"
              loading="lazy"
            />
          ))}
        </div>
        <div className="basis-full h-full md:basis-[30%] flex flex-col gap-4">
          {images2.map((image) => (
            <Image
              key={image.src}
              className=" min-w-full md:w-[30%] rounded-3xl min-h-full "
              src={image}
              alt="gallery image"
            />
          ))}
        </div>
        <div className="basis-full h-full md:basis-[30%] flex flex-col gap-4">
          {images3.map((image) => (
            <Image
              key={image.src}
              className=" min-w-full md:w-[30%] rounded-3xl min-h-full "
              src={image}
              alt="gallery image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
