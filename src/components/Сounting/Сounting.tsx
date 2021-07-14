import React, { useState } from "react";
import { ICalculation as IData } from "../СountingList/СountingList";
import styles from './Сounting.module.css';

interface ICountingProps {
    key: number,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
    data: IData,
    id: number,
    isResultsTouched: boolean
}

export const Сounting: React.FC<ICountingProps> = ({id, data, changeHandler, isResultsTouched}) => {
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
    let cls = isCorrectAnswer ? `${styles.input} ${styles.inputCorrect}` : `${styles.input} ${styles.inputIncorrect}` ;

    if(!isResultsTouched) {
        cls = styles.input;
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        changeHandler(e, id);
        if (data.rightAnswer !== data.userAnswer) {  
            setIsCorrectAnswer(false);
        } else {            
            setIsCorrectAnswer(true);
        }
    }

    return (
        <>
            <span className={styles.counting}>{data.calculation}</span>
            <input className={cls} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e, id)}/>  
        </>
    )
}