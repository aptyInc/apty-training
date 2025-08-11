import { useState,useEffect,forwardRef,useImperativeHandle } from "react";
const Time=forwardRef((props,ref)=>{
    const [seconds, setSeconds] = useState(0);  
      
      const [intervalId, setIntervalId] = useState(null);  
    
      const startTimer = () => {
     
        const id = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);  
        }, 1000);
        setIntervalId(id);  
      };
      useImperativeHandle(ref, () => ({
        resetTimer: () => {
          
          clearInterval(intervalId);
          setSeconds(0);
        }
      }));
    
    
      
     
      
      useEffect(() => {
        startTimer();
        return () => {
          clearInterval(intervalId);  // Ensure the interval is cleared on unmount
        };
      }, []);
    
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Stopwatch</h1>
          <p style={{ fontSize: "48px" }}>{seconds} seconds</p>
          <div>
           
         
          </div>
        </div>
      );
});
export default Time;