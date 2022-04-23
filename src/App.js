import React, { useState } from 'react';

function App() {
  // The 2 golden rule of hooks are:
  // 1. Hooks can only be created within a component
  // 2. Hooks must be used at the top-level; cannot be nested or in a conditional statement
  // Extra rule: Hooks must always be called in the exact same order

  // The useState hook is simply a function used to update a state
  // useState ALWAYS returns an array consisting of the default state and the function used to update the state
  // const arr = useState(4) is never used; use destructuring instead

  // useState consists of the default state and the function used to update the current state
  const [count, setCount] = useState(4)

  const [theme, setTheme] = useState('blue')


  // Here is our update function that is triggered when the state changes
  function decrementCount () {
    // Always use an arrow function that passes the previous value

    setCount(prevCount => (prevCount - 1))
    setTheme('red')
  }

  function incrementCount() {
    setCount(prevCount => (prevCount + 1))
    setTheme('red')
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
