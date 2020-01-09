import React from 'react';
import { connect } from 'react-redux'
import{voteAnectdote} from '../reducers/anecdoteRedux'
import {votedMessage,clearMessage} from "../reducers/notificationRedux"
const AnecdoteList = (props)  =>{
    const anecdotes = props.anecdotes;
    const vote = (id,content) => {
        console.log('vote', id)
        props.voteAnectdote(id)
        props.votedMessage(content)
        setTimeout(()=>
        { 
            props.clearMessage() 
        }, 3000);
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
      votedMessage,    
      clearMessage,
      voteAnectdote
    }
    )(AnecdoteList)
