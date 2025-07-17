//Here we do same as the <IntervalClassCounter> but that is in the class component 
//here we do same timer work in hook method by the function componnent
import React ,{useEffect, useState}from 'react'

 function IntervalHookCount() {
    const[count,setCount]= useState(0)
    // const tick=()=>{
    //     setCount(count+1)
    // }
    const tick=()=>{
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval= setInterval(tick,1000)
         return()=>{
        clearInterval(interval)
    }
    },[])  ///when we to want put our array as empty []and want it works properly then use the prevState method in the {tick} variable.

    //when you dont want to put this array empty then written in it [count] add take your tick varible method which you take first setCount(count+1)
   
  return (
    <div>{count}</div>
  )
}
export default IntervalHookCount