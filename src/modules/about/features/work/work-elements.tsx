import { getWork } from "../../data/get-work";
import WorkElement from "./work-element";

export default async function WorkElements() {
  const work = await getWork();
  if (typeof work === "string")
    return <div className=" text-red-500">{work}</div>;
  return (
    <div className=" flex flex-col gap-8 ">
      {work.map((work) => (
        <WorkElement key={work.id} work={work} />
      ))}
    </div>
  );
}
