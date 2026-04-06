"use client";

import { useEffect, useState } from "react";
import { LayeredImageOverlay } from "./LayeredImageOverlay";

export function HeroHighlight() {
  const projectShowcases = [
    "/Projects/Damepelis 2.png",
    "/Projects/Damepelis 3.png",
    "/Projects/Damepelis.png",
    "/Projects/Devhive.png",
  ] as const;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * projectShowcases.length);
    setCurrentIndex(randomIndex);
  }, [projectShowcases.length]);

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projectShowcases.length);
  };

  return (
    <button
      type="button"
      onClick={handleNextImage}
      className="w-full cursor-pointer text-left"
      aria-label="Cycle showcased project image"
      title="Click to view next project screenshot"
    >
      <LayeredImageOverlay
        baseImage="/BrowserBase.png"
        baseAlt="Project highlight browser interface"
        overlays={[
          {
            src: projectShowcases[currentIndex],
            alt: "Selected project showcase",
            bottom: 0,
            x: 0,
            zIndex: 20,
          },
        ]}
        scale={1}
      />
    </button>
  );
}
