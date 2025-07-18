//here we use the {useReducer }method of hook with simple perfroming switch action of three button .
//Practice question thrid simple method of second practise question of useReduce

import React,{useReducer} from 'react'
const initialState=0
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
 function ReducerThree() {
  const[count,dispatch] = useReducer(reducer,initialState)
  const[countTw0,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <div>

        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <div>
            <div>CountTwo-{countTw0}</div>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  )
}
export default ReducerThree