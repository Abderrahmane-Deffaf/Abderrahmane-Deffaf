"use client";
import React, { useState, useEffect } from "react";

const MouseTrackerBg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate gradient position relative to window size
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%,  #032e15 1%, #000000, #000000)`,
        transition: "background 1s ease",
      }}
    />
  );
};

export default MouseTrackerBg;
