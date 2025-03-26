import React from "react";
import { useRef, useState } from "react";
export default function App13() {
  const msgRef = useRef();
  const [color, setColor] = useState();
  const handleSubmit = () => {
    msgRef.current.style.color = color
  };
  return (
    <div>
      <h3>This is App13</h3>
      <p>
        <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <h4 ref={msgRef}>Hello World</h4>
      </p>
    </div>
  );
}