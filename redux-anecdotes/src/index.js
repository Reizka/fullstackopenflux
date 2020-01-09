import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteRedux from './reducers/anecdoteRedux'
import notificationRedux from './reducers/notificationRedux'
import anecdoteSerice from "./services/anecdoteService"

const reducer = combineReducers({
  anecdotes: anecdoteRedux,
  notification: notificationRedux
})

const store = createStore(reducer)

anecdoteSerice.getAll().then(notes =>
  notes.forEach(note => {
    store.dispatch({ type: 'NEW_ANECTDOTE', data: note })
  })
)

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