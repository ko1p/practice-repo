import React, { useState, useEffect } from "react";
import styles from "./СountingList.module.css";
import { Сounting } from "../Сounting/Сounting";
import { Results } from "../Results/Results";
import { calcExamples } from "../../utils/calculations";
import { useSelector, useDispatch } from "react-redux";
import { setCalculations as setCalculationsTwo, hasEmptyInputs } from "../../store/actions/calculations";
import { setCorrectAnswers as setCorrectAnswersR, setIncorrectAnswers as setIncorrectAnswersR, setIsResultsShowed as setIsResultsShowedR, setIsResultsTouched as setIsResultsTouchedR } from '../../store/actions/results'

export interface ICalculation {
  calculation: string;
  rightAnswer: number;
  userAnswer: string | number;
  isCorrect: boolean
}

interface ICountingListProps {
  userName: string;
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


const СountingList: React.FC<ICountingListProps> = ({ userName }) => {
  const dispatch = useDispatch();
  const calculationsR = useSelector((state: ICalculationList) => state.calculations.calculationsList); //
  const isInputsEmpty = useSelector((state: IHasEmpyInputs) => state.calculations.hasEmptyInputs);
  const isResultsShowedR = useSelector((state: IIsResultsShowed) => state.results.isResultsShowed); //

  const [calculations, setCalculations] = useState<Array<ICalculation>>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
  const [hasAllAnswers, setHasAllAnswers] = useState<boolean>(false);
  const [isResultsShowed, setIsResultsShowed] = useState<boolean>(false);
  const [isResultsTouched, setIsResultsTouched] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setCalculationsTwo(calcExamples(10))); //
    setCalculations(calcExamples(10));
  }, [dispatch]);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const newState = calculations;
    calculations[index].userAnswer = +e.target.value;
    setCalculations(newState);
  };

  const answerChecker = () => {
    const noEmptyInputs = calculationsR.every((item) => item.userAnswer !== '');
    console.log(noEmptyInputs, 'net pustih')
    if (!noEmptyInputs) {
      setHasAllAnswers(false);
      dispatch(hasEmptyInputs(true));//
      setHasError(true);
      dispatch(setIsResultsShowedR(false)) // R
      setIsResultsShowed(false);
    } else {
      setHasAllAnswers(true);
      dispatch(hasEmptyInputs(false));//
      setHasError(false);
      
      dispatch(setIsResultsShowedR(true)) // R
      setIsResultsShowed(true);
      dispatch(setIsResultsTouchedR(true)) // R
      setIsResultsTouched(true);
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
    dispatch(setCorrectAnswersR(correctAnswersCounter)); // TODO подумать об оптимизации
    dispatch(setIncorrectAnswersR(inCorrectAnswersCounter));
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
        <Сounting
          key={index}
          changeHandler={inputChangeHandler}
          data={item}
          id={index}
          isResultsTouched={isResultsTouched}
        />
      ))}
      <button className={styles.button} onClick={answerChecker}>
        Далее
      </button>
      {isInputsEmpty && <span className={styles.error}>Заполните все поля</span>}
      {!isInputsEmpty && isResultsShowedR && (
        <Results
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          userName={userName}
          setIsResultsShowed={setIsResultsShowed}
          setCorrectAnswers={setCorrectAnswers}
          setIncorrectAnswers={setIncorrectAnswers}
        />
      )}
    </div>
  );
};

export default СountingList;
