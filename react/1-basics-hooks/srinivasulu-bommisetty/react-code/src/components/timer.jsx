import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import "./timer.css";

function Timer(props, refe) {
  let [time, setTime] = useState(0);


  useEffect(() => {
    const timeref = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timeref);
    };
  }, []);

  useImperativeHandle(refe, () => ({ reset_timer: () => setTime(0) }));

  return (
    <div className="timer-display">
      <h2>Timer:</h2>
      <div className="timer-value">{time} seconds</div>
    </div>
  );
}
export default React.memo(forwardRef(Timer));
