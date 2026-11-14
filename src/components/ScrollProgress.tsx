import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: reducedMotion ? scrollYProgress : smoothProgress }}
      aria-hidden="true"
    />
  );
}
