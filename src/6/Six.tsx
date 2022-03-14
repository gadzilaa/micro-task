import React, { useState } from 'react'
import { FullInput } from './FullInput'

export const Six = () => {

  let [message, setMessage] = useState ([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ])

  const addMessage = (title:string) => {
    console.log(title);
    let newMessage = {message: 'new Message'};
    setMessage([newMessage,...message])
    
  }

  return (
    <>
    <FullInput addMessage={addMessage}/>
    {message.map((el,index) => {
      return(
        <div key={index}>{el.message}</div>
      )
    })}
    </>
  )
}
