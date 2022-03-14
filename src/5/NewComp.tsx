import React from 'react'
import { Button } from '../components/Button'
import { ButtonType } from './Five'

export type MoneyType = {
    banknots: string
    number:string
    value:number
}

type NewCompType = {
    onClickFilterHandler: (nameButton: ButtonType)=>void
    currentMoney: Array<MoneyType>
}


export const NewComp = (props: NewCompType) => {
  return (
    <>
    <ul>
      {props.currentMoney.map((el, index) => {
        return (
          <li key={index}>
            <span> Banknots: {el.banknots}</span>
            <span> Number: {el.number}</span>
            <span> Value: {el.value}</span>
          </li>

        )
      }

      )}


    </ul>
    <div style={{ marginLeft: '150px' }}>
      {/* <button onClick={() => props.onClickFilterHandler('all')}>all</button>
      <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
      <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button> */}
      <Button name={'all'} callBack={() => props.onClickFilterHandler('all')} />
      <Button name={'ruble'} callBack={() => props.onClickFilterHandler('ruble')} />
      <Button name={'dollar'} callBack={() => props.onClickFilterHandler('dollar')} />
    </div>

  </>
  )
}
