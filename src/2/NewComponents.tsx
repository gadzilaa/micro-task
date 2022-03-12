import React from 'react'


type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentsType = {
    students: Array<StudentsType>
}

type TopCars = {
    manufacturer: string
    model: string
}

export const NewComponents = (props: NewComponentsType) => {

    const topCars: TopCars[] = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]
    return (
        // <ul>
        //     {props.students.map(el => {
        //         return (
        //             <li key={el.id} >
        //                 {el.name} - 
        //                 {el.age}
        //             </li>
        //         )
        //     })}
        // </ul>
        <>
            <table>
            {topCars.map((el, index)=>{
                        return(
                            <tr key={index}>
                              <span>nazva: {el.manufacturer}</span>  
                              <span> model: {el.model}</span>  
                            
                            </tr>
                        )})}
              </table>  
         

        </>
    )
}
