import React from 'react';
import './Results.css'

interface IResultsProps {
    correctAnswers: number,
    incorrectAnswers: number,
    userName: string,
    setIsResultsShowed: (boolean: boolean) => void,
    setIncorrectAnswers: (num: number) => void,
    setCorrectAnswers: (num: number) => void
}

export const Results: React.FC<IResultsProps> = ({correctAnswers, incorrectAnswers, userName, setIsResultsShowed, setIncorrectAnswers, setCorrectAnswers}) => {
    const onClickHandler = () => {
        setIsResultsShowed(false);
        setCorrectAnswers(0)
        setIncorrectAnswers(0)
    }

    return (
        <div className="popup">
            <div className="results">
                <h2 className="results__heading">{userName} - Вы молодец!</h2>
                <p className="results__info results__info_correct">Верных ответов: {correctAnswers}</p>
                <p className="results__info results__info_incorrect">Неверных ответов: {incorrectAnswers}</p>
                <button className="results__button" onClick={onClickHandler}>Вернуться к подсчётам</button>
            </div>
        </div>
    )
}