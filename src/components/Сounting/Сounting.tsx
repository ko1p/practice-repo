import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICalculation as IData } from "../СountingList/СountingList";
import { setUserAnswer } from '../../store/actions/calculations';
import styles from './Сounting.module.css';

interface ICountingProps {
    key: number,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
    data: IData,
    id: number,
    isResultsTouched: boolean
}

interface IIsResultsTouched {
    results: {
      isResultsTouched: boolean
    }
  }

export const Сounting: React.FC<ICountingProps> = ({id, data, changeHandler, isResultsTouched}) => {
    const dispatch = useDispatch();
    const isCorrectAnswer = data.isCorrect

    const isResultsTouchedR = useSelector((state: IIsResultsTouched) => state.results.isResultsTouched); //

    // const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
    let cls = isCorrectAnswer ? `${styles.input} ${styles.inputCorrect}` : `${styles.input} ${styles.inputIncorrect}` ;

    if(!isResultsTouchedR) {
        cls = styles.input;
    }

    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    //     changeHandler(e, id);
    //     if (data.rightAnswer !== data.userAnswer) {  
    //         setIsCorrectAnswer(false);
    //     } else {            
    //         setIsCorrectAnswer(true);
    //     }
    // }

    const onChangeHandlerR = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = +e.target.value;
        const calculation = data.calculation;
        const isCorrect = data.rightAnswer === userAnswer ? true : false;
        dispatch(setUserAnswer(userAnswer, calculation, isCorrect))
    }

    return (
        <>
            <span className={styles.counting}>{data.calculation}</span>
            <input className={cls} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandlerR(e)}/>  
            {/* <input className={cls} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e, id)}/>   */}
        </>
    )
}