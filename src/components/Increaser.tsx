import React from 'react';

type CounterTypeProps = {
  setCounter: (counter: number |  ((prevVar: number) => number)) => void
}

export const Increaser: React.FC<CounterTypeProps> = ({ setCounter }): React.ReactElement => {

  const increase = () => {
    setCounter(prev => prev + 1)
  }

  const decrease = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
        <button onClick={increase}>Увеличить</button>
        <button onClick={decrease}>Уменьшить</button>
    </>
  );
}