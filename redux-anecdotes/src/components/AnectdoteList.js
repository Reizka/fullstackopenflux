import React from 'react';
import{voteAnectdote} from '../reducers/anecdoteReducer'

const AnectdoteList = (props)  =>{
    const store = props.store;
    const anecdotes = props.store.getState()
    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(voteAnectdote(id))
      }
    
      return (
        <div>
              <h2>Anecdotes</h2>
              {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                  <div>
                    {anecdote.content}
                  </div>
                  <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                  </div>
                </div>
              )}
        </div>
      )
}

export default AnectdoteList;