import React, {useState} from 'react';
import { Counter }  from './components/Counter'
import { Increaser }  from './components/Increaser'
import { Logger }  from './components/Logger'

const App: React.FC = (): React.ReactElement => {

  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <h1>Какой-то очень важный сайт. </h1>
      <Counter counter={counter} />
      <Increaser setCounter={setCounter} />
      <Logger />
    </>
  );
}

export default App;
