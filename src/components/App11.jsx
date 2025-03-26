import React from "react";
import { useState } from "react";
export default function App11() {
  const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [message, setMessage] = useState("");
    const increment = () => {
        setCount(count+1)
        setMessage("Well done!")
        
        
      };
      const decrement = () => {
        setCount1(count1+1)
        setMessage("Better luck Next Time!!")
       
      };
      return (
        <div>
          <button onClick={decrement}>Wicket</button>
          {count1}
    
          <button onClick={increment}>run</button>
          {count}

          <p>{message}</p>
        </div>
      );
    }