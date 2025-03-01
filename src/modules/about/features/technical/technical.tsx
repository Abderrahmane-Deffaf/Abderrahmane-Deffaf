import Image from "next/image";
import { technical } from "../../data/tech";

export default function Technical() {
  return (
    <div className=" space-y-8">
      <h2 className=" text-center">Technical Skills</h2>
      <div className=" space-y-4">
        {technical.map((tech) => (
          <div key={tech.category} className=" flex flex-col gap-8">
            <p className=" text-center text-green-700 text-xl font-medium">
              {tech.category}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {tech.technologies.map((t) => (
                <div className=" flex items-center gap-2 " key={t.name}>
                  <div className=" size-8 flex justify-center items-center">
                    <Image
                      className=" object-contain object-center"
                      src={t.image}
                      alt={t.name}
                    />
                  </div>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
