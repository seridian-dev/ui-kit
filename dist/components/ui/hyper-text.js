"use client";

// src/components/ui/hyper-text.tsx
import {
  useEffect,
  useRef,
  useState
} from "react";
import {
  AnimatePresence,
  motion
} from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
var motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span
};
var DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
);
var getRandomInt = (max) => Math.floor(Math.random() * max);
function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}) {
  const MotionComponent = motionElements[Component];
  const [displayText, setDisplayText] = useState(
    () => children.split("")
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef(null);
  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay, startOnView]);
  useEffect(() => {
    let animationFrameId = null;
    if (isAnimating) {
      const maxIterations = children.length;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        iterationCount.current = progress * maxIterations;
        setDisplayText(
          (currentText) => currentText.map(
            (letter, index) => letter === " " ? letter : index <= iterationCount.current ? children[index] ?? letter : characterSet[getRandomInt(characterSet.length)] ?? letter
          )
        );
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [children, duration, isAnimating, characterSet]);
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "hyper-text",
      className: cn("overflow-hidden py-2 text-4xl font-bold", className),
      onMouseEnter: handleAnimationTrigger,
      ...props,
      children: /* @__PURE__ */ jsx(AnimatePresence, { children: displayText.map((letter, index) => /* @__PURE__ */ jsx(
        motion.span,
        {
          className: cn("font-mono", letter === " " ? "w-3" : ""),
          children: letter.toUpperCase()
        },
        index
      )) })
    }
  );
}
export {
  HyperText
};
//# sourceMappingURL=hyper-text.js.map