import React, { useState } from 'react'

export const Four = () => {

  let [a, setA] = useState(1)

  const onClickHandler = () => {
    setA(++a);
  }

  const onClickHandler1 = () => {
    setA(a=0)
  }

  return (
    <>
    <h1>{a}</h1>
    <button onClick={onClickHandler}>+</button>
    <button onClick={onClickHandler1}>0</button>
    </>
    
    
  )
}
