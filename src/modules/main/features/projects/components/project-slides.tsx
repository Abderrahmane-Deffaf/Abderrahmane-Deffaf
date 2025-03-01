"use client";

import ProjectElement from "./project-element";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type ProjectSdlidesProps = {
  projects: Project[];
};
export default function ProjectSlides({ projects }: ProjectSdlidesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade(),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="embla space-y-2 lg:space-y-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <ProjectElement project={project} key={project.id} />
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
