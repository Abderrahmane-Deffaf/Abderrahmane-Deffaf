"use client";
import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      // Create a date object with the current UTC time
      const now = new Date();

      // Algeria is in UTC+1
      const algeriaTime = new Date(now.getTime());
      setTime(algeriaTime);
    };

    // Update time immediately
    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
    timeZone: "Africa/Algiers",
  });

  return <span>{formattedTime}</span>;
};

export default Time;
