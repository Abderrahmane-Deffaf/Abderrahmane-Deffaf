import CertsElement from "./components/certs-element";
import { certs } from "./data/certs";

export default function CetrsScreen() {
  return (
    <div>
      <div className="wrapper w-full  py-16 px-8">
        <div className="w-full flex flex-wrap justify-between gap-8">
          {certs.map((category, index) => (
            <div
              key={index}
              className="w-full  lg:w-[48%] bg-neutral-900 rounded-xl py-4 px-2 "
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                {category.category}
              </h2>
              <CertsElement images={category.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
