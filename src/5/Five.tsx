import React, { useState } from 'react'
import { MoneyType, NewComp } from './NewComp'


export type ButtonType = 'all' | 'ruble' | 'dollar'

export const Five = () => {

  const [money, setMoney] = useState<MoneyType[]>([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  let [filter, setFilter] = useState<ButtonType>('all')

  let currentMoney = money

  if (filter === 'ruble') {
    currentMoney = money.filter((filter) => filter.banknots === 'RUBLS')
  } else if (filter === 'dollar') {
    currentMoney = money.filter((filter) => filter.banknots === 'Dollars')
  }




  const onClickFilterHandler = (nameButton: ButtonType) => {
    setFilter(nameButton)
  }

  return (
    <NewComp onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
  ) 
}
