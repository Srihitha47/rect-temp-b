import React from 'react'
import { useState,useEffect } from 'react'

export default function App10() {
    const[v1,setv1]=useState(0);
    const[v2,setv2]=useState(0);
    const[total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(Number(v1)+Number(v2));
    },[v1]);
    useEffect(()=>{
        setTotal(Number(v1)*Number(v2));
    },[v2]);
    useEffect(()=>{
        setTotal(Number(v1)*Number(v2));
    },[v1,v2]);
    return (
        <div>
      
    <p><input type="number" onChange={(e) => setv1(e.target.value)} placeholder="enter num1"></input></p>
    <p><input type="number" onChange={(e) => setv2(e.target.value)} placeholder="enter num2"></input></p>
<p>Total:{total}</p>
  </div>
    )
}
