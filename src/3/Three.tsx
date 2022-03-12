import React, { MouseEvent } from 'react'
import { Button } from '../components/Button'

export const Three = () => {

  // const myFirstSub = (event:MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hi I'm Vasya");

  // }
  // const mySecondSub = (event:MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hi I'm Ivan");

  // }

  // const onClickHandler = (name: string) => {
  //   console.log(name);

  // }

  // const foo1 = (event:MouseEvent<HTMLButtonElement>)=> {
  //   console.log('100200');

  // }
  // const foo2 = (name: string)=> {
  //   console.log(name);

  // }

  const youtubeFirst = (sub:string, age:number, adress:string) => {
    console.log(sub, age, adress);
    
  }
  const youtubeSecond = (sub:string) => {
    console.log(sub);
    
  }
  const stupidButton = () => {
    console.log('stupid button');
    
  }

  return (
    <div>
      {/* <button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Vasya')}>My youtube channel-1</button>
      <button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Petya')}>My youtube channel-2</button>
      {/* <button onClick={foo1}>1</button>
      <button onClick={(event:MouseEvent<HTMLButtonElement>)=>foo2('100200')}>2</button> */}

      {/* <button>my youtube channel-1</button>
      <button>my youtube channel-1</button> */}
      <Button name={'my youtube channel-1'} callBack={()=>youtubeFirst("I'm Vasya",22, 'Minsk')}/>
      <Button name={'my youtube channel-2'} callBack={()=>youtubeSecond("I'm Petya")}/>
      <Button name={'stupid'} callBack={stupidButton} />


    </div>

  )
}
