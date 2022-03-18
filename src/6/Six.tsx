import React, { useState } from 'react'
import { Button } from './Button'
import { FullInput } from './FullInput'
import { Input } from './Input'

export const Six = () => {

  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ])

  let [title, setTitle] = useState('')

  const addMessage = (title: string) => {
    let newMessage = { message: title }
    setMessage([newMessage, ...message])

  }

  const callBackButtonHandler = (title:string) => {
    addMessage(title);
    setTitle('')
  }


  return (
    <div>
      {/* <FullInput addMessage={addMessage} /> */}

      <Input setTitle={setTitle} title={title}/>
      <Button callBack={()=>callBackButtonHandler (title)} name={'+'} />

      {message.map((el, index) => {
        return (
          <div key={index}>
            {el.message}
          </div>
        )
      })}
    </div>


  )


}
