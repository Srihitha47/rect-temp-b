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
      <p><b><i>useRef hook</i></b>: <b>To change the color of a "Hello World" message dynamically,</b>
      <br></br> this component uses `useState` to store the color input from a text field <br></br>and `useRef` to directly reference the h4 element displaying the message. 
      <br></br>The `e.target.value` retrieves the current typed input. When you type a color into the input box and click the Submit button, the `handleSubmit` function applies that color to the text using inline styles via the ref.</p>
      <p>
        <input type="text" onChange={(e) => setColor(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
      </p>
        <h4 ref={msgRef}>Hello World</h4>
    </div>
  );
}