import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsResultsShowed as setIsResultsShowedR } from '../../store/actions/results'
import styles from './Results.module.css';

type UserName = {
    login: {
        login: string
    }
}

type CorrectAnswersNum = {
    results: {
        correctAnswers: number
    }
}

type IncorrectAnswersNum = {
    results: {
        incorrectAnswers: number
    }
}

export const Results: React.FC = () => {
    const dispatch = useDispatch();
    const userNameR = useSelector((state: UserName) => state.login.login);
    const correctAnswersNum = useSelector((state: CorrectAnswersNum) => state.results.correctAnswers);
    const inCorrectAnswersNum = useSelector((state: IncorrectAnswersNum) => state.results.incorrectAnswers);
    
    const onClickHandler = () => {
        dispatch(setIsResultsShowedR(false));
    }

    return (
        <div className={styles.popup}>
            <div className={styles.results}>
                <h2 className={styles.heading}>{userNameR} - Вы молодец!</h2>
                <p className={`${styles.info} ${styles.infoCorrect}`}>Верных ответов: {correctAnswersNum}</p>
                <p className={`${styles.info} ${styles.infoIncorrect}`}>Неверных ответов: {inCorrectAnswersNum}</p>
                <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
            </div>
        </div>
    )
}