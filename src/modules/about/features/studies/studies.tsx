const studies = [
  {
    title: "Computer Science",
    location: "ESTIN de Bejaia",
    date: "2021-2026",
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
            <p>
              {study.speciality} - {study.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
