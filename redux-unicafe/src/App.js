import React from 'react'
import {addGood,addBad,addOk,setToZero} from "./reducers/reduceCounter"


const App = (props) => {
  const store = props.store;

  const good = () => {
    store.dispatch(addGood())
  }

  const ok = () => {
    store.dispatch(addOk())
  }

  const bad = () => {
    store.dispatch(addBad())
  }

  const reset = () => {
    store.dispatch(setToZero())
  }
  return (
    <div>
      <button onClick={good}>good</button> 
      <button onClick={ok}>ok</button> 
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset</button>
      <div>good {store.getState().good}</div>
      <div>ok{store.getState().ok}</div>
      <div>bad{store.getState().bad}</div>
    </div>
  )
}

export default App