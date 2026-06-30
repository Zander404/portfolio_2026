
"use client";

import * as React from "react";
import { Carousel, type CarouselApi } from "@/components/retroui/Carousel";

interface Props {
  data: React.ReactNode[];
}

export default function RetroCarousel({ data }: Props) {
  const [isMounted, setIsMounted] = React.useState(false);
  const [api, setApi] = React.useState<CarouselApi>();

  // Custom navigation state markers
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  // Monitor slide change selection snaps
  const onSelect = React.useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;

    const currentIndex = carouselApi.selectedScrollSnap();
    const totalSlidesCount = carouselApi.scrollSnapList().length;

    // Bounds definitions: Start at 1 (2nd card), end at total - 2 (second-to-last card)
    const minAllowedIndex = 0;
    const maxAllowedIndex = totalSlidesCount - 1;

    /* 
      1. LOWER BOUND RE-DIRECTION:
      If a user somehow swipes backwards into the 1st element (Index 0),
      instantly snap them back onto Index 1 without playing a transition.
    */
    if (currentIndex < minAllowedIndex) {
      carouselApi.scrollTo(minAllowedIndex, true); // true = instant jump
      return;
    }

    /* 
      2. UPPER BOUND RE-DIRECTION:
      If a user swipes forwards past your limit, instantly snap them
      back to the maximum allowed position (Index n-2).
    */
    if (currentIndex > maxAllowedIndex) {
      carouselApi.scrollTo(maxAllowedIndex, true);
      return;
    }

    // 3. UPDATE NAV BUTTON VISIBILITY BASED ON CUSTOM BOUNDARIES
    setCanScrollPrev(currentIndex > minAllowedIndex);
    setCanScrollNext(currentIndex < maxAllowedIndex);
  }, []);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", () => onSelect(api));
    api.on("reInit", () => onSelect(api));
  }, [api, onSelect]);

  return (
    <Carousel
      /* 
        - loop: false -> Halts infinite looping behavior
        - startIndex: 1 -> Forces initial load directly onto the 2nd item configuration
      */
      opts={{ loop: false, startIndex: 0 }}
      setApi={setApi}
      className="w-full max-w-5xl mx-auto px-6"
    >
      <Carousel.Content className="flex gap-4">
        {data.map((content, index) => (
          <Carousel.Item key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="h-full pb-4">
              {content}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>

      {isMounted && (
        <div className="flex justify-center items-center gap-4 mt-6">

          {/* Hides Arrow when user hits your custom starting index limit */}
          <div className={!canScrollPrev ? "invisible pointer-events-none" : "visible"}>
            <Carousel.Previous className="static translate-y-0" />
          </div>

          {/* Hides Arrow when user hits your custom ending index limit */}
          <div className={!canScrollNext ? "invisible pointer-events-none" : "visible"}>
            <Carousel.Next className="static translate-y-0" />
          </div>

        </div>
      )}
    </Carousel>
  );
}

