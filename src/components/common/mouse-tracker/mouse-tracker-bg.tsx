"use client";
import React, { useState, useEffect } from "react";

const MouseTrackerBg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const size = window.innerWidth >= 1024 ? 800 : 480; // lg breakpoint is typically 1024px
    const halfSize = size / 2;
    const handleMouseMove = (e: MouseEvent) => {
      console.log("mouse move", e.clientX, e.clientY);
      setMousePosition({
        x: e.clientX - halfSize,
        y: e.clientY - halfSize,
      });
    };

    //window.addEventListener("wheel", handleMouseWheel);
    window.addEventListener("mousemove", handleMouseMove);
    //window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [window.innerWidth]);

  return (
    <div
      style={{ left: mousePosition.x, top: mousePosition.y }}
      className="size-[30rem] rounded-full lg:size-[50rem] transition-all duration-800 lg:duration-0 fixed inset-0 blob_gradient"
    ></div>
  );
};

export default MouseTrackerBg;
