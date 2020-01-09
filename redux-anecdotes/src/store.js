import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteRedux from './reducers/anecdoteRedux'
import notificationRedux from './reducers/notificationRedux'

const reducer = combineReducers({
  anecdotes: anecdoteRedux,
  notification: notificationRedux,
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk))
)

export default store