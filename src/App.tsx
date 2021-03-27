import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar'
import { Quotes } from './components/Quotes';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './Interfaces/ITodo';
import { IQuote } from './Interfaces/IQuote';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [quote, setQuote] = useState<string>('')
    
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(res => {
              setQuote(res.quote)
            })
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string): void => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Вы действительно хотете удалить элемент?")
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
          <TodoForm onAdd={addHandler} />
          <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
          <Quotes quote={quote} />
      </div>
    </>
  )
}

export default App;
