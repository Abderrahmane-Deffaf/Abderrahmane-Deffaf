"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
interface CertImage {
  src: any;
  alt: string;
  description?: string;
}
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/modules/main/features/projects/components/EmblaCarouselArrowButtons";

interface CategoryCarouselProps {
  images: CertImage[];
}
export default function CertsElement({ images }: CategoryCarouselProps) {
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
          {images.map((image: CertImage, index: number) => (
            <div key={index} className="embla__slide flex flex-col  gap-4">
              <div className="p-2">
                <div className="relative w-fit  mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-fit rounded-lg"
                  />
                </div>
              </div>
            </div>
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
