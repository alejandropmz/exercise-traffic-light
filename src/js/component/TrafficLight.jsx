import React, {useState} from "react";

const Trafficlight = (props) => {

  const [color, setColor] = useState("");
  
  return (
    <div className="container">
      <div className="semaphore">
        <div className="tube"></div>
        <div className="traffic-light">
          <div className="light red"></div>
          <div className="light yellow"></div>
          <div className="light green"></div>
        </div>
      </div>
    </div>
  );
};

export default Trafficlight;
