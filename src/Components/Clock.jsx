import React, { useState, useEffect } from "react";

export default function Clock({ city, timeZone }) {
  const [now, setNow] = useState("");

  useEffect(() => {
    setInterval(() => {
      setNow(new Date().toLocaleTimeString("en", { timeZone }));
    }, 1000);
  });

  return (
    <div className="clock flex-col">
      <p>{city}</p>
      <h1 className="text-4xl">{now}</h1>
    </div>
  );
}
