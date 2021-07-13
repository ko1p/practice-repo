import React, { useState } from "react";
import { ICalculation as IData } from "../СountingList/СountingList";
import './Сounting.css';


interface ICountingProps {
    key: number,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
    data: IData,
    id: number,
    isResultsTouched: boolean
}



export const Сounting: React.FC<ICountingProps> = ({id, data, changeHandler, isResultsTouched}) => {
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
    let cls = isCorrectAnswer ? 'input input_correct' : 'input input_incorrect';

    if(!isResultsTouched) {
        cls = 'input'
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        changeHandler(e, id);
        if (data.rightAnswer !== data.userAnswer) {  
            setIsCorrectAnswer(false)
        } else {            
            setIsCorrectAnswer(true)
        }

    }

    return (
        <>
            <span className="counting-example">{data.calculation}</span>
            <input className={cls} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e, id)}/>  
        </>
    )
}