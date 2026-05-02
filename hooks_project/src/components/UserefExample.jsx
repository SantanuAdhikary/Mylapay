
import React, { useRef, useState } from 'react'
import { useMyhook } from '../context/UserContext';

const UserefExample = () => {


      let {sim , network,number,increaseNumber}    = useMyhook()

    let num = useRef(0) ;
    let divref = useRef();
    let [username , setUsername] = useState("dhoni")

    let changeColor =()=>{
        console.log(divref.current)

        divref.current.style.backgroundColor= "green"
    }
    let increase =()=>{
       num.current =  num.current + 1;
       console.log(num.current)
    }

  return (
    <div className='outer' ref={divref}>
        <h1> useref example</h1>
        <button onClick={changeColor}>change color</button>

        <h2>{num.current}</h2>
        <button onClick={increase}>increment</button>

        <h2> {username}</h2>
        <button onClick={()=> setUsername("virat")}>change name</button>  


        <h2> my sim is : {sim}</h2>        
        <h2> my network is : {network}</h2>


        <h1>number from api : {number}</h1>
        <button onClick={increaseNumber}>increase</button>
    </div>
  )
}

export default UserefExample