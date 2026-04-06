"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Selected Work", href: "#selected-work" },
  { label: "Systems", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY;
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 100;
      // Threshold: section is active when its top is this far from viewport top
      const threshold = navbarHeight + 150;

      let currentSection = "home";

      // Check from bottom to top to get the most recent section we've entered
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          // If we've scrolled past this section's top (accounting for navbar and threshold)
          if (scrollPosition + threshold >= sectionTop) {
            currentSection = sections[i];
            break;
          }
        }
      }

      // If we're near the top, always set to home
      if (scrollPosition < 100) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    // Call once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    
    // Set active section immediately
    setActiveSection(targetId);
    
    // For home, scroll to top
    if (targetId === "home") {
      smoothScrollTo(0);
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      // Get actual navbar height dynamically
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 4.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      
      if (targetId === "selected-work") {
        // For selected-work, scroll to the h2 heading positioned below navbar
        const heading = element.querySelector("h2");
        if (heading) {
          const headingPosition = (heading as HTMLElement).getBoundingClientRect().top + window.pageYOffset;
          // Position heading just below navbar with small extra spacing
          const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const offsetPosition = headingPosition - navbarHeight - (2.5 * rootFontSize);
          smoothScrollTo(Math.max(0, offsetPosition));
          return;
        }
      }
      
      if (targetId === "approach" || targetId === "capabilities") {
        // For approach/systems, scroll with the same tuned offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const offsetPosition = elementPosition - navbarHeight - (1.5 * rootFontSize);
        smoothScrollTo(Math.max(0, offsetPosition));
        return;
      }
      
      // For other sections, use standard scroll
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      smoothScrollTo(Math.max(0, offsetPosition));
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/85 pt-2 md:pt-3 backdrop-blur-md">
      <div className="mx-auto flex w-[85vw] max-w-[1600px] items-center justify-between rounded-xl border border-white/8 bg-[#11161C]/70 px-4 py-2 md:px-6 md:py-3 lg:px-8 xl:px-10">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-base md:text-lg font-semibold tracking-tight transition-all hover:opacity-90"
          style={{ 
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          <span className="text-white">Valentin.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #d1d5db 0%, #e5e7eb 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ballesteros
          </span>
        </a>

        <div className="hidden items-center gap-6 md:gap-8 lg:gap-10 xl:gap-11 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-xs md:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted/85 hover:text-foreground/90"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="rounded-full border border-white/15 bg-surface px-3 py-1.5 md:px-4 md:py-2 lg:px-5 text-xs md:text-sm font-medium transition-colors hover:border-accent hover:bg-accent hover:text-[#06110d]"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
