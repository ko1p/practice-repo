import React, { useState, useEffect } from "react";
import './СountingList.css';
import { Сounting } from '../Сounting/Сounting';
import { calcExamples } from '../../utils/calculations'

export interface ICalculation {
    calculation: string,
    rightAnswer: number,
    userAnswer: string | number
}

const СountingList = () => {

    const [calculations, setCalculations] = useState<Array<ICalculation>>([])
    const [hasError, setHasError] = useState<boolean>(false)
    const [correctAnswers, setCorrectAnswers] = useState<number>(0)
    const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0)
    const [hasAllAnswers, setHasAllAnswers] = useState<boolean>(false)
    const [isResultsShowed, setIsResultsSwowed] = useState<boolean>(false)

    useEffect(() => {
        setCalculations(calcExamples(10))
    }, [])

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        const newState = calculations;
        calculations[index].userAnswer = +e.target.value;
        setCalculations(newState);
    }

    const answerChecker = () => {
        const noEmptyInputs = calculations.every(item => item.userAnswer);
        console.log(calculations.every(item => item.userAnswer), 'vse li zapolneno')
        if (!noEmptyInputs) {
            setHasAllAnswers(false)
            setHasError(true)
        } else {
            setHasAllAnswers(true)
            setHasError(false)
        }
        calculations.forEach(item => {
            if (item.userAnswer === item.rightAnswer) {
                setCorrectAnswers(state => state + 1)
            } else {
                setIncorrectAnswers(state => state + 1)
            }
        })
    }
    console.log(!hasError, hasAllAnswers)
    return (
        <>
            <h2>Здесь будут подсчёты</h2>
            {calculations.map((item, index) => <Сounting key={index} changeHandler={inputChangeHandler} data={item} id={index} isResultsShowed={isResultsShowed}/> )}                
                <>
                    {/* <Сounting key={index} changeHandler={inputChangeHandler} data={item} index={index} /> */}
                    {/* <span key={`calculation-${index}`}>{item.calculation}</span>
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputChangeHandler(e, index)}/> */}
                </>            
      
            <button onClick={answerChecker}>Проверить ответы</button>
            {hasError && <span>Заполните все поля</span>}
            {!hasError && hasAllAnswers && <span>{correctAnswers} - верных ответов / {incorrectAnswers} - неверных ответов</span>}          
        </>
    )
}

export default СountingList;