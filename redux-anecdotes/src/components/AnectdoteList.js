import React from 'react';
import{voteAnectdote} from '../reducers/anecdoteRedux'
import {votedMessage} from "../reducers/notificationRedux"
const AnectdoteList = (props)  =>{
    const store = props.store;
    const anecdotes = props.store.getState().anectdotes;
    const vote = (id,content) => {
        console.log('vote', id)
        store.dispatch(voteAnectdote(id))
        store.dispatch(votedMessage(content))
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

export default AnectdoteList;