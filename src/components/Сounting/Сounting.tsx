import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserAnswer } from '../../store/actions/calculations';
import styles from './Сounting.module.css';

import { ICountingProps, IResultsState } from "../../interfaces";

export const Сounting: React.FC<ICountingProps> = ({ data }) => {
    const dispatch = useDispatch();
    const isResultsTouchedR = useSelector((state: IResultsState) => state.results.isResultsTouched);
    const isCorrectAnswer = data.isCorrect;

    let cls = isCorrectAnswer ? `${styles.input} ${styles.input_correct}` : `${styles.input} ${styles.input_incorrect}`;

    if(!isResultsTouchedR) {
        cls = styles.input;
    }

    const onChangeHandlerR = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = +e.target.value;
        const calculation = data.calculation;
        const isCorrect = data.rightAnswer === userAnswer ? true : false;
        dispatch(setUserAnswer(userAnswer, calculation, isCorrect));
    }

    return (
        <>
            <span className={styles.counting}>{data.calculation}</span>
            <input className={cls} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandlerR(e)}/>  
        </>
    )
}