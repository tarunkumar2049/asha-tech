"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, color: "bg-blue-500", text: "Welcome to Our Platform" },
  { id: 2, color: "bg-purple-500", text: "Discover New Experiences" },
  { id: 3, color: "bg-emerald-500", text: "Build Seamless Interfaces" },
];

const variants = {
  enter: {
    x: "100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.3 },
    },
  },
};

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer); // Clean up timer on unmount
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-40 flex h-80 overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence initial={false}>
        {slides.map((items) => {
          return (
            <motion.div
              key={items.id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-amber-500 w-full max-w-2xl"
            >
              <h1 className={`${items.color}`}>{items.id}</h1>
              <h1 className={`${items.color}`}>{items.text}</h1>
              <h3>{items.color}</h3>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
