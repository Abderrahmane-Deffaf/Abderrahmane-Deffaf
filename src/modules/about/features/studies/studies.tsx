const studies = [
  {
    title: "DataScale",
    location: "UVSQ de Versailles",
    speciality: "AI & DS",
  },
  {
    title: "Computer Science",
    location: "ESTIN de Bejaia",
    speciality: "AI & DS",
  },
];
export default function Studies() {
  return (
    <div id="studies" className=" flex flex-col space-y-4">
      <h2>Studies</h2>
      <div className=" space-y-4">
        {studies.map((study) => (
          <div key={study.title} className="">
            <h4>{study.title}</h4>
            <p>{study.location}</p>
            <p>{study.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
