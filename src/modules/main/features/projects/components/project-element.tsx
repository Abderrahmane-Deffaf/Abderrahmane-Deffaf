import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectElement({ project }: { project: Project }) {
  return (
    <div className="embla__slide flex flex-col  gap-4">
      <div className=" flex flex-col gap-4 lg:flex-row">
        <div className=" basis-full space-y-4 lg:basis-1/2">
          <h4 className=" select-none">{project.name}</h4>
          <p
            className="  select-none"
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          ></p>
        </div>
        <div className="rounded-2xl basis-full lg:basis-1/2 overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt}
            className=" w-full object-center select-none  object-contain "
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className=" flex gap-4 items-center">
        {project.liveUrl && (
          <Link
            className=" flex gap-1 text-green-400 font-semibold"
            href={project.liveUrl}
          >
            <span>Live</span>
            <SquareArrowOutUpRight />
          </Link>
        )}
        {project.githubUrl && (
          <Link
            className=" flex gap-1 text-green-400 font-semibold"
            href={project.githubUrl}
          >
            <span>Github</span>
            <SquareArrowOutUpRight />
          </Link>
        )}
      </div>
    </div>
  );
}
