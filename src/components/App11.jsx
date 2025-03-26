import React from "react";
import { useState , useEffect} from "react";
import "./App11.css"
export default function App11() {
  const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [message, setMessage] = useState("Let's Begin The Game");

    // useEffect(()=>{
    //     if count>0 && setMessage("well Done!");
    // },[count]);

    // useEffect(()=>{
        // count1 1> 0 && setMessage("Better Luck Nxt Time");
    // },[count1]);

    const increment = () => {
        setCount(count+1)
        if(count >0 && count1 <10){
        setMessage("Well done!")
        }
        
        
      };
      const decrement = () => {
        if(count1 === 10){
            setMessage("Game Over!!")
        }

        else if(count1 >= 0  && count1 <= 9){
            setCount1(count1+1)
        setMessage("Better luck Next Time!!")
        }
        

       
      };
      return (
        <div className="App-App11-Container">
            <h3>This is App11</h3>
            <div className="App-App11-Row">
            <div className="App-App11-Box">
          <button onClick={decrement}>Wicket</button>
          <p>{count1}</p>
          </div>
          <div className="App-App11-Box">
          <button onClick={increment}>run</button>
          <p>{count}</p>
          </div>
          </div>
          <hr></hr>
          <div className="App-App11-Row">
          <p><center>{message}</center></p>
          </div>
        </div>
      );
    }