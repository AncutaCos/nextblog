// components/Counter.js
import { useState, useEffect } from "react";

const Counter = ({ start = 0, end, duration, textBefore = "", textAfter = "" }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const updateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [start, end, duration]);

  return (
    <span>
      {textBefore} {count} {textAfter}
    </span>
  );
};

export default Counter;
