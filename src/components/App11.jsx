// // import React from "react";
// // import { useState, useEffect } from "react";
// // import "./App10.css";
// // export default function App10() {
// //   const [run, setRun] = useState(0);
// //   const [wicket, setWicket] = useState(0);
// //   const [msg, setMsg] = useState("Let's begin the game!");
// //   useEffect(() => {
// //     if (run > 0 && wicket < 10) {
// //       setMsg("Well Done!");
// //     }
// //   }, [run]);
// //   useEffect(() => {
// //     if (wicket === 10) {
// //       setMsg("Game Over!");
// //     } else if (wicket < 9 && wicket > 0) {
// //       setMsg("Better Luck Next Time");
// //     } else if (wicket > 10) {
// //       setWicket(10);
// //     }
// //   }, [wicket]);
// //   return (
// //     <div className="App-App10-Container">
// //       <h3>This is App10</h3>
// //       <div className="App-App10-Row">
// //         <div className="App-App10-Box">
// //           <button onClick={() => setRun(run + 1)}>Run</button>
// //           <p>{run}</p>
// //         </div>
// //         <div className="App-App10-Box">
// //           <button onClick={() => setWicket(wicket + 1)}>Wicket</button>
// //           <p>{wicket}</p>
// //         </div>
// //       </div>
// //       <hr></hr>
// //       <div className="App-App10-Row">
// //         <div className="App-App10-Box"> {msg}</div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useState , useRef } from "react";
// import "./App11.css"
// export default function App11() {
//   const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);
//     const [message, setMessage] = useState("Let's Begin The Game");
//     const runRef = useRef();
//     const wicketRef = useRef();
//     const msgRef = useRef()

//     // useEffect(()=>{
//     //     if count>0 && setMessage("well Done!");
//     // },[count]);

//     // useEffect(()=>{
//         // count1 1> 0 && setMessage("Better Luck Nxt Time");
//     // },[count1]);

//     const increment = () => {
//         if(count >=0 && count1 <10){
//             setCount(count+1)
//         setMessage("Well done!")
//         runRef.current.style.backgroundColor = "yellow";
//         wicketRef.current.style.backgroundColor = "white";
//         }
        
        
//       };
//       const decrement = () => {
//         if(count1 === 10){
//             setMessage("Game Over!!")
//             msgRef.current.style.backgroundColor = "yellow"
//       runRef.current.style.backgroundColor = "white";
//       wicketRef.current.style.backgroundColor = "white";
//         }

//         else if(count1 >= 0  && count1 <= 9){
//             setCount1(count1+1)
//         setMessage("Better luck Next Time!!")
//         runRef.current.style.backgroundColor = "white";
//         wicketRef.current.style.backgroundColor = "yellow";
//         }
        

       
//       };
//       return (
//         <div className="App-App11-Container">
//             <h3>This is App11</h3>
//             <div className="App-App11-Row">
//             <div className="App-App11-Box">
//           <button onClick={decrement}>Wicket</button>
//           <p>{count1}</p>
//           </div>
//           <div className="App-App11-Box">
//           <button onClick={increment}>run</button>
//           <p>{count}</p>
//           </div>
//           </div>
//           <hr></hr>
//           <div className="App-App11-Row">
//           <p><center>{message}</center></p>
//           </div>
//         </div>
//       );
//     }

import React from "react";
import { useState, useRef } from "react";
import "./App11.css";
export default function App11() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef()
  const handleRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMsg("Well Done!");
      runRef.current.style.backgroundColor = "purple";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "skyblue";
    } else {
      setMsg("Game Over");
      msgRef.current.style.backgroundColor = "red";
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App-App11-Container">
      <h3>This is App10</h3>
      <div className="App-App11-Row">
        <div className="App-App11-Box" ref={runRef}>
          <button onClick={handleRun}>Run</button>
          <p>{run}</p>
        </div>
        <div className="App-App11-Box" ref={wicketRef}>
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App-App11-Row">
        <div className="App-App11-Box" ref={msgRef}> {msg}</div>
      </div>
    </div>
  );
}