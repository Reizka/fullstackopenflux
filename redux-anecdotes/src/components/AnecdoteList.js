import React from 'react';
import { connect } from 'react-redux'
import{voteAnectdote} from '../reducers/anecdoteRedux'
import {message,clearMessage} from "../reducers/notificationRedux"
const AnecdoteList = (props)  =>{
    const anecdotes = props.anecdotes;
    const vote = (id,content) => {
        console.log('vote', id)
        props.voteAnectdote(id)
        props.message(content)
        setTimeout(()=>{
          props.clearMessage();
        },1000)
        
        
      }
    
      return (
        <div>
              {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                  <div>
                    {anecdote.content}
                  </div>
                  <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                  </div>
                </div>
              )}
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
    }
  }
 
  export default connect(
    mapStateToProps,
    { //MapStateToDispatch Wrap  
      message,
      clearMessage,    
      voteAnectdote
    }
    )(AnecdoteList)
