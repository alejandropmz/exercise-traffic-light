import React, { useState } from "react";

const Trafficlight = () => {
  const colors = ["red", "yellow", "green"];
  const [color, setColor] = useState("");
  const [indice, setIndice] = useState(0);

  const Auto = () => {
    setInterval(() => {
      setIndice(indice + 1);
      if (indice == 2) {
        setIndice(0);
      }
      setColor(colors[indice]);
      console.log(indice)
    }, 2000);
    
  };

  return (
    <div className="container">
      <div className="semaphore">
        <div className="tube"></div>
        <div className="traffic-light">
          <div
            onClick={() => setColor("red")}
            className={color == "red" ? "light red" : "off light red"}
          ></div>
          <div
            onClick={() => setColor("yellow")}
            className={color == "yellow" ? "light yellow" : "off light yellow"}
          ></div>
          <div
            onClick={() => setColor("green")}
            className={color == "green" ? "light green" : "off light green"}
          ></div>
          <button
            onClick={() => {
              setIndice(indice + 1);
              if (indice == 2) {
                setIndice(0);
              }
              setColor(colors[indice]);
            }}
            className="btn btn-primary"
          ></button>
        </div>
        <div className="tube"></div>
        <button className="button btn btn-success" onClick={()=>{Auto()}}></button>
      </div>
    </div>
  );
};

export default Trafficlight;
