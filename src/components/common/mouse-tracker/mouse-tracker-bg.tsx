"use client";
import React, { useState, useEffect } from "react";

const MouseTrackerBg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowInnerWidth, setWindowInnerWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 800;
  });

  useEffect(() => {
    function updateWindowInnerWidth() {
      setWindowInnerWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowInnerWidth);
      return () => window.removeEventListener("resize", updateWindowInnerWidth);
    }
  }, []);

  useEffect(() => {
    const size = windowInnerWidth >= 1024 ? 800 : 480; // lg breakpoint is typically 1024px
    const halfSize = size / 2;
    const handleMouseMove = (e: MouseEvent) => {
      console.log("mouse move", e.clientX, e.clientY);
      setMousePosition({
        x: e.clientX - halfSize,
        y: e.clientY - halfSize,
      });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
    //window.addEventListener("wheel", handleMouseWheel);
    //window.addEventListener("scroll", handleScroll);
  }, [windowInnerWidth]);

  return (
    <div
      style={{ left: mousePosition.x, top: mousePosition.y }}
      className="size-[30rem] rounded-full lg:size-[50rem] transition-all duration-800 lg:duration-0 fixed inset-0 blob_gradient"
    ></div>
  );
};

export default MouseTrackerBg;
