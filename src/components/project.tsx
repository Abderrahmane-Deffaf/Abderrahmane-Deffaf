import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React, { PropsWithChildren } from "react";

export type ProjectProps = {
  className?: string;
  imageClassName?: string;
  type: string;
  name: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  alt: string;
};

export default function Project({
  className,
  type,
  name,
  description,
  tech,
  image,
  alt,
  imageClassName,
}: ProjectProps) {
  return (
    <div className={clsx("first-project", className)}>
      <div className={clsx("text-side", className)}>
        <h5>{type}</h5>
        <h4>
          <span className="h1-text">{name}</span>
        </h4>
        <div className="paragraph">
          <p
            className="para-section"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>
        <li>Technologies used include:</li>
        <ul id="list-of-technologies">
          {tech.map((Element) => (
            <li key={Element}>{Element}</li>
          ))}
        </ul>
      </div>
      <Image className={clsx("img", imageClassName)} src={image} alt={alt} />
    </div>
  );
}
