import React, { useEffect, useState } from 'react'

 function HookEffectone() {
    const [count, setCount]= useState(0)
    const [name, setName]= useState('')
    //we can change the document title by this hook when we using the use this hook useeffect title will chnge according to your choice ......jab hum useEffect ka use krlete hai to humhe lifecycle method use krne ki need nhi pdti..
    useEffect(()=>{
        console.log(`useEffect- Updating document title`)
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=> setCount(count+1)}>Click{count} times</button>
    </div>
  )
}
export default HookEffectone