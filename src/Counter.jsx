import React, { useState } from 'react'

function counter() {
    const [counter, setCounter]=useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
  return (
    <div>
        <button onClick={increment} disabled={counter==10}>Increment</button>
        <p>{counter}</p>
        <button onClick={decrement}disabled={counter==0}>Decrement</button>
    </div>
  )
}

export default counter