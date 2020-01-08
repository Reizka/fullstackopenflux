import React from 'react';
import{createAnectdote} from '../reducers/anecdoteReducer'


const AnectdoteForm = (props)=>{
const store = props.store;
    
      const addAnectdote = (event) =>{
        event.preventDefault();
        const content = event.target.anecdote.value;
        console.log("content",content);
        store.dispatch(createAnectdote({
          content
        }));
        event.target.anecdote.value="";
      }

    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={addAnectdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
          </form>
        </div>
      )
}

export default AnectdoteForm;