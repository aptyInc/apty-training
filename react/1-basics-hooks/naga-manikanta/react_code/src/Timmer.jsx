import React, { useState, useEffect,useRef } from "react";
import Time from "./Time";
function Timer() {
    const timerRef = useRef();
    const handleReset = () => {
        if (timerRef.current) {
          timerRef.current.resetTimer(); 
        }
      };
    
    return<>
  <Time ref={timerRef}></Time>
<button onClick={handleReset} style={buttonStyle}>Reset Time</button>
</>
}


const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#4CAF50",
  color: "white",
};

export default Timer;




function rect (){
    let [one,setone]=useState([1,2,3,4])

    return(<>
    <table>
        {one.map((val)=><Clild text={"hi"}/>)}
    </table>
    </>)
}


function Child(props){
console.log("hi")
    return(<>
    <tr>
        <td>{props.text}</td>
    </tr>
    </>)
}


