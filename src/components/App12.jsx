// import React from "react";
// import { useState , useRef } from "react";
// import "./App12.css"
// export default function App12() {
//   const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);
//     const [message, setMessage] = useState("Let's Begin The Game");
//     // const runRef = useRef();
//     // const wicketRef = useRef();
//     // const msgRef = useRef()

//     // useEffect(()=>{
//     //     if count>0 && setMessage("well Done!");
//     // },[count]);

//     // useEffect(()=>{
//         // count1 1> 0 && setMessage("Better Luck Nxt Time");
//     // },[count1]);

//     const decrement = () => {
//         if(count <1){
//             setCount(count+1)
//         setMessage("Well done!")
        
//         }
        
        
//       };
//       const increment = () => {
//        if( count1 <4){
//             setCount1(count+4)
//         setMessage("Well done!")
       
//         }
        
        
//       };
//       const increment1 = () => {
//         if(count2 <6){
//             setCount2(count1+6)
//         setMessage("Well done!")
        
//         }
        
        
//       };
//       const increment2 = () => {
//        if( count3<8){
//             setCount3(count2+8)
//         setMessage("Well done!")
       
//         }
        
        
//       };
//       return (
//         <div className="App-App12-Container">
//             <h3>This is App11</h3>
//             <div className="App-App12-Row">
//             <div className="App-App12-Box">
//           <button onClick={decrement}>1</button>
//           <p>{count}</p>
//           </div>
//           <div className="App-App12-Box">
//           <button onClick={increment}>4</button>
//           <p>{count1}</p>
//           </div>
//           <div className="App-App12-Box">
//           <button onClick={increment1}>6</button>
//           <p>{count2}</p>
//           </div>
//           <div className="App-App12-Box">
//           <button onClick={increment2}>8</button>
//           <p>{count3}</p>
//           </div>
//           </div>
//           <hr></hr>
//           <div className="App-App12-Row">
//           <p><center>{message}</center></p>
//           </div>
//         </div>
//       );
//     }


import React from "react";
import { useState, useRef } from "react";
import "./App12.css";
export default function App12() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef()
  const handleRun = (v) => {
    if (wicket < 10) {
      setRun(run + v);
      setMsg("Well Done!");
      if(v===1)runRef.current.style.backgroundColor = "yellow";
      if(v===4)runRef.current.style.backgroundColor = "grey";
      if(v===6)runRef.current.style.backgroundColor = "skyblue";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "green";
    } else {
      setMsg("Game Over");
      msgRef.current.style.backgroundColor = "red"
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  return (
    <div className="App-App12-Container">
      <h3>This is App12</h3>
      <div className="App-App12-Row">
        <div className="App-App12-Box" ref={runRef}>
          <button onClick={()=>handleRun(1)}>1</button>
          <button onClick={()=>handleRun(4)}>4</button>
          <button onClick={()=>handleRun(6)}>6</button>
    
          <p>{run}</p>
        </div>

        <div className="App-App12-Box" ref={wicketRef}>
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App-App12-Row">
        <div className="App-App10-Box" ref={msgRef}> {msg}</div>
      </div>
    </div>
  );
}