type WorkElementProps = {
  work: Work;
};
export default function WorkElement({ work }: WorkElementProps) {
  return (
    <div>
      <div className=" flex justify-between w-full space-y-4 ">
        <div className=" flex flex-col gap-1">
          <h4 className=" text-balance">{work.company}</h4>
          <p className=" text-green-700">{work.position}</p>
        </div>
        <p className=" text-end">{work.date}</p>
      </div>
      <ul className=" list-disc list-inside">
        {work.description.split("<br/>").map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
