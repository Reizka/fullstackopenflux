import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import anecdoteService from "./services/anecdoteService"
import {initializeAnecdotes} from "./reducers/anecdoteRedux"

const App = (props) => {
  //const store = props.store;
  useEffect(()=>{
    anecdoteService
    .getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
  },[props])
  
  return(
    <div>
      <Notification />
       <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )

}

export default connect(null, {initializeAnecdotes})(App)