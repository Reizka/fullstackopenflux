import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/reduceCounter'
import App from "./App";

const store = createStore(noteReducer)

const renderApp = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)

renderApp()
store.subscribe(renderApp)
