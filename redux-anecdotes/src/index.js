import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteRedux from './reducers/anecdoteRedux'
import notificationRedux from './reducers/notificationRedux'

const reducer = combineReducers({
  anecdotes: anecdoteRedux,
  notification: notificationRedux
})

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)