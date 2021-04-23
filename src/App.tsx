import React from 'react';
import { Logger } from './components/Logger'

const App: React.FC = (): React.ReactElement => {

  return (
    <>
      <h1>Какой-то очень важный сайт. </h1>
      <Logger />
    </>
  );
}

export default App;
