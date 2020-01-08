import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import App from './App'
import anectdoteRedux from './reducers/anecdoteRedux'
import notificationRedux from './reducers/notificationRedux'

const reducer = combineReducers({
  anectdotes: anectdoteRedux,
  notification: notificationRedux
})

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)