import React from 'react';

type CounterTypeProps = {
    counter: number
}

export const Counter: React.FC<CounterTypeProps> = ({ counter }): React.ReactElement => {
  return (
    <>
        <p>Текуший счётчик равен: {counter}</p>
    </>
  );
}