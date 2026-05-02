import React, { useReducer } from 'react'
import { useMyhook } from '../context/UserContext'

const UseReducerExample = () => {


      let {talktime,number,decreaseNumber}= useMyhook()


    let reducer =(state,action)=>{

         if(action.type == "INCREMENT")
            return {count : state.count + 1}
         if(action.type == "DECREMENT")
            return {count : state.count - 1}
         if(action.type == "RESET")
            return {count : 0}
    }

      let [state, dispatch] =  useReducer(reducer ,{count:0} )
  
  return (

    <div>

           <h1> {state.count}</h1>
           <button onClick={()=> dispatch({type:"INCREMENT"})}>incerment</button>
           <button onClick={()=> dispatch({type:"DECREMENT"})}>decerment</button>
           <button onClick={()=> dispatch({type:"RESET"})}>reset</button>

           <h2>talktime is : {talktime}</h2>

           <h1>api number is : {number}</h1>
           <button onClick={decreaseNumber}>decrease</button>
    </div>
  )
}

export default UseReducerExample