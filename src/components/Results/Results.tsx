import React from 'react';
import styles from './Results.module.css'

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
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
    }

    return (
        <div className={styles.popup}>
            <div className={styles.results}>
                <h2 className={styles.heading}>{userName} - Вы молодец!</h2>
                <p className={`${styles.info} ${styles.infoCorrect}`}>Верных ответов: {correctAnswers}</p>
                <p className={`${styles.info} ${styles.infoIncorrect}`}>Неверных ответов: {incorrectAnswers}</p>
                <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
            </div>
        </div>
    )
}