import React, { ChangeEvent, useState } from 'react'

type FullInputType = {
    addMessage: (title:string)=> void
}

export const FullInput = (props:FullInputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickInputHandler = () => {
        props.addMessage(title)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} />
            <button onClick={onClickInputHandler}>+</button>
        </div>
    )
}
