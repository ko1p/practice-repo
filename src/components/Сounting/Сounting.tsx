import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICalculation as IData } from "../СountingList/СountingList";
import { setUserAnswer } from '../../store/actions/calculations';
import styles from './Сounting.module.css';

interface ICountingProps {
    key: string,
    data: IData,
}

interface IIsResultsTouched {
    results: {
      isResultsTouched: boolean
    }
  }

export const Сounting: React.FC<ICountingProps> = ({data}) => {
    const dispatch = useDispatch();
    const isResultsTouchedR = useSelector((state: IIsResultsTouched) => state.results.isResultsTouched);
    const isCorrectAnswer = data.isCorrect;

    let cls = isCorrectAnswer ? `${styles.input} ${styles.inputCorrect}` : `${styles.input} ${styles.inputIncorrect}`;

    if(!isResultsTouchedR) {
        cls = styles.input;
    }

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
        </>
    )
}