import React from 'react';
import { Header } from './components/Header'

function App() {

  const onClick = (e: React.MouseEvent): void => {
    console.log(e.target)
  }

  return (
    <Header onClick={onClick} />
  );
}

export default App;
