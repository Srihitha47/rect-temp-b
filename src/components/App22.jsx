import React from 'react'
import { useEffect,useState } from 'react';

export default function App22() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Component Mounted");
        return()=>{
            console.log("Component Unmounted");
        };

    },[]);
    const handleClick =()=>{
        setCount(count+1)
        console.log("component upadated or reloaded")

    }
  return (
    <div>
        <h3>App22</h3>
        <button onClick={handleClick}>Click</button>
        {count}
        </div>
  );
}
