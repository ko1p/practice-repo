import React, { useState, useEffect } from "react";
import styles from "./СountingList.module.css";
import { Сounting } from "../Сounting/Сounting";
import { Results } from "../Results/Results";
import { calcExamples } from "../../utils/calculations";
import { useSelector, useDispatch } from "react-redux";
import { setCalculations as setCalculationsTwo } from "../../store/actions/calculations";

export interface ICalculation {
  calculation: string;
  rightAnswer: number;
  userAnswer: string | number;
}

interface ICountingListProps {
  userName: string;
}

const СountingList: React.FC<ICountingListProps> = ({ userName }) => {
  const dispatch = useDispatch();

  const [calculations, setCalculations] = useState<Array<ICalculation>>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
  const [hasAllAnswers, setHasAllAnswers] = useState<boolean>(false);
  const [isResultsShowed, setIsResultsShowed] = useState<boolean>(false);
  const [isResultsTouched, setIsResultsTouched] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setCalculationsTwo(calcExamples(10)))
    setCalculations(calcExamples(10));
  }, []);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const newState = calculations;
    calculations[index].userAnswer = +e.target.value;
    setCalculations(newState);
  };

  const answerChecker = () => {
    const noEmptyInputs = calculations.every((item) => item.userAnswer);

    if (!noEmptyInputs) {
      setHasAllAnswers(false);
      setHasError(true);
      setIsResultsShowed(false);
    } else {
      setHasAllAnswers(true);
      setHasError(false);
      userCorrectAnswersCounter();
      setIsResultsShowed(true);
      setIsResultsTouched(true);
    }
  };

  const userCorrectAnswersCounter = () => {
    calculations.forEach((item) => {
      if (item.userAnswer === item.rightAnswer) {
        setCorrectAnswers((state) => state + 1);
      } else {
        setIncorrectAnswers((state) => state + 1);
      }
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Сложение и вычитание с чисел от 0 до 100.
      </h2>
      <p className={styles.subtitle}>
        Решите и укажите ответы для каждого из 10 примеров.
      </p>
      {calculations.map((item, index) => (
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
      {hasError && <span className={styles.error}>Заполните все поля</span>}
      {!hasError && hasAllAnswers && isResultsShowed && (
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
