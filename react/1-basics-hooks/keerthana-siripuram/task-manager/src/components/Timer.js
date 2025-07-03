import React, { useState, useEffect, useRef, useImperativeHandle } from "react";

const Timer = ({ ref }) => {

  const [second, setSecond] = useState(0);
  const timerRef = useRef(null);
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { reset: () => setSecond(0) };
    },
    []
  );
  return <div>Timer:{second}s</div>;
};

export default Timer;
