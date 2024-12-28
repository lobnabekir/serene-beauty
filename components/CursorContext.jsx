"use client";
import React, { useState, useEffect, createContext } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ size: 30, background: "#473936" });
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Correct spring configuration
  const springConfig = { damping: 20, stiffness: 290, mass: 0.45 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Function to move the cursor based on mouse position
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - cursor.size / 2); // Center the cursor
    mouseY.set(e.clientY - cursor.size / 2); // Center the cursor
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursor.size]);

  const mouseEnterHandler = () => {
    setCursor({ size: 90, background: "#00423a" });
    setIsHovering(true);
  };

  const mouseLeaveHandler = () => {
    setCursor({ size: 30, background: "#473936" });
    setIsHovering(false);
  };

  return (
    <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
      <motion.div
        className="fixed z-[99] rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: springX,
          top: springY,
          width: cursor.size,
          height: cursor.size,
          background: cursor.background,
          borderRadius: "50%", // Ensure it's a circle
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
