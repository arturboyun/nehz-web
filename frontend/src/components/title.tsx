"use client";

import { useEffect, useRef } from "react";
import { animate, createSpring} from 'animejs';

const animateText = (element: HTMLElement, boundsElement: HTMLElement) => {
  // Сначала делаем элемент видимым
  animate(element, {
        scale: [
          { to: 1.25, ease: 'inOut(10)', duration: 1000 },
          { to: 1, ease: createSpring({ stiffness: 1500 }) }
        ],
        // loop: true,
        loopDelay: 5000,
      });
}

export default function Title({ config }: { config: { name: string } }) {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const boundsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const loadAnimation = () => {
      try {
        if (targetRef.current) {
          targetRef.current.style.opacity = '1';
          animateText(targetRef.current, boundsRef.current!);
        }
      } catch (error) {
        console.error('Failed to load anime.js:', error);
        if (targetRef.current) {
          targetRef.current.style.opacity = '1';
        }
      }
    };

    loadAnimation();

    // Cleanup function
    return () => {
      if (targetRef.current) {
        // Сброс стилей при размонтировании
        const element = targetRef.current;
        element.style.transform = '';
        element.style.opacity = '';
      }
    };
  }, []);

  return (

    <div className="flex flex-col items-center sm:items-start gap-4" ref={boundsRef}>
      <h1
        className="text-3xl font-bold text-center sm:text-left"
        ref={targetRef}
        style={{ opacity: 0 }} // Управляем opacity через style
      >
        {config.name}
      </h1>
    </div>
  );
}
