import React, { useState,useEffect } from 'react'

 function HookMouse() {
    const[x, setX]=useState(0)
     const[y, setY]=useState(0)
     const logMousePosition=(e)=>{
        console.log('Mouse event ')    //multiple times render when move our mouese multiple times
        setX(e.clientX)
        setY(e.clientY)
     }
     useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
     },[])
    //  return()=>{
    //     console.log('Component unmounting code')
    //     window.removeEventListener('mousemove', logMousePosition)
    //  }
  return (
    <div>
        Hooks: X.cordinate-{x} Y.cordinate-{y}
    </div>
  )
}
export default HookMouse