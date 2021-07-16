import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./СountingList.module.css";
import { Сounting } from "../Сounting/Сounting";
import { Results } from "../Results/Results";
import { calcExamples } from "../../utils/calculations";
import { useSelector, useDispatch } from "react-redux";
import { setCalculations as setCalculationsTwo, hasEmptyInputs } from "../../store/actions/calculations";
import { setCorrectAnswers, setIncorrectAnswers, setIsResultsShowed, setIsResultsTouched } from '../../store/actions/results'

export interface ICalculation {
  calculation: string;
  rightAnswer: number;
  userAnswer: string | number;
  isCorrect: boolean
}

interface ICalculationList {
  calculations: {
    calculationsList: any[] // TODO исправить
  }
}

interface IHasEmpyInputs {
  calculations: {
    hasEmptyInputs: boolean
  }
}

interface IIsResultsShowed {
  results: {
    isResultsShowed: boolean
  }
}

interface IUserLogin {
  login: {
    login: string
  }
}


const СountingList: React.FC= () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector((state: IUserLogin) => state.login.login); 
  const calculationsR = useSelector((state: ICalculationList) => state.calculations.calculationsList);
  const isInputsEmpty = useSelector((state: IHasEmpyInputs) => state.calculations.hasEmptyInputs);
  const isResultsShowedR = useSelector((state: IIsResultsShowed) => state.results.isResultsShowed);

  if (login === '') {
    history.push('/');
  }

  useEffect(() => {
    dispatch(setCalculationsTwo(calcExamples(10))); //
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsResultsTouched(false))
  }, [calculationsR, dispatch])

  const answerChecker = () => {
    const noEmptyInputs = calculationsR.every((item) => item.userAnswer !== '');

    if (!noEmptyInputs) {
      dispatch(hasEmptyInputs(true));//
      dispatch(setIsResultsShowed(false)) // R
    } else {
      dispatch(hasEmptyInputs(false));//  
      dispatch(setIsResultsShowed(true)) // R
      dispatch(setIsResultsTouched(true)) // R
      userCorrectAnswersCounter();
    }
  };

  const userCorrectAnswersCounter = () => {
    let correctAnswersCounter = 0;
    let inCorrectAnswersCounter = 0;
    calculationsR.forEach((item) => {
      if (item.userAnswer === item.rightAnswer) {
        correctAnswersCounter += 1;
      } else {
        inCorrectAnswersCounter += 1;
      }
    });
    dispatch(setCorrectAnswers(correctAnswersCounter)); // TODO подумать об оптимизации
    dispatch(setIncorrectAnswers(inCorrectAnswersCounter));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Сложение и вычитание с чисел от 0 до 100.
      </h2>
      <p className={styles.subtitle}>
        Решите и укажите ответы для каждого из 10 примеров.
      </p>
      {calculationsR.map((item, index) => (
        <Сounting key={`counting-${index}`} data={item} />
      ))}
      <button className={styles.button} onClick={answerChecker}>
        Далее
      </button>
      {isInputsEmpty && <span className={styles.error}>Заполните все поля</span>}
      {!isInputsEmpty && isResultsShowedR && (
        <Results />
      )}
    </div>
  );
};

export default СountingList;