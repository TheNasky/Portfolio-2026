"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type OverlayItem = {
  src: string;
  alt: string;
  x?: number;
  y?: number;
  bottom?: number;
  width?: number;
  height?: number;
  zIndex?: number;
};

type LayeredImageOverlayProps = {
  baseImage: string;
  baseAlt: string;
  overlays?: OverlayItem[];
  scale?: number;
};

export function LayeredImageOverlay({
  baseImage,
  baseAlt,
  overlays = [],
  scale = 0.33,
}: LayeredImageOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(-25), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !elementRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const elementWidth = elementRef.current.offsetWidth;
    const elementHeight = elementRef.current.offsetHeight;
    
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const normalizedX = mouseX / (elementWidth / 2);
    const normalizedY = mouseY / (elementHeight / 2);

    const rightSideMultiplier = normalizedX > 0 ? 3.2 : 0.5;
    const rotateXValue = normalizedY * -8;
    const rotateYValue = -25 + normalizedX * 8 * rightSideMultiplier;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(-25);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-visible"
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={elementRef}
        className="relative overflow-visible"
        style={{
          width: `${scale * 100}%`,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          zIndex: 1,
        }}
      >
        <div 
          className="relative w-full rounded-xl" 
          style={{ 
            aspectRatio: "16/10",
            boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.5), 0 24px 64px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-xl"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[11px] px-px pb-px">
              <Image
                src={baseImage}
                alt={baseAlt}
                fill
                quality={100}
                className="object-contain object-top"
                priority
                sizes="(max-width: 768px) 95vw, 50vw"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  imageRendering: "auto",
                }}
              />
              {overlays.map((overlay, index) => (
                <div
                  key={overlay.alt || `overlay-${index}`}
                  className="absolute overflow-hidden rounded-[11px]"
                  style={{
                    left: overlay.x ?? 0,
                    top: 0,
                    bottom: overlay.bottom ?? 0,
                    right: overlay.x !== undefined ? undefined : 0,
                    width: overlay.width ?? "100%",
                    height: overlay.height ?? "100%",
                    zIndex: overlay.zIndex ?? 10 + index,
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={overlay.src}
                      alt={overlay.alt}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 95vw, 50vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
