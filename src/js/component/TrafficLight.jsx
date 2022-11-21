import React, {useState} from "react";

const Trafficlight = () => {

  const colors = ["red", "yellow", "green"];
  const [color, setColor] = useState("");
  
  return (
    <div className="container">
      <div className="semaphore">
        <div className="tube"></div>
        <div className="traffic-light">
          <div onClick={()=> setColor("red")} className={color == "red" ? "light red":"off light red"}></div>
          <div onClick={()=> setColor("yellow")} className={color == "yellow" ? "light yellow":"off light yellow"}></div>
          <div onClick={()=> setColor("green")} className={color == "green" ? "light green":"off light green"}></div>
          <button onClick={()=>{
            let number = Math.floor(Math.random()*3)
            setColor(colors[number])
          }} className="btn btn-primary"></button>
        </div>
        <div className="tube"></div>
        <button className="button btn btn-success"></button>
      </div>
    </div>
  );
};



export default Trafficlight;
