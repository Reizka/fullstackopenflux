import React from 'react';
import{createAnectdote} from '../reducers/anecdoteRedux'
import {votedMessage} from "../reducers/notificationRedux"


const AnectdoteForm = (props)=>{
const store = props.store;
const {anectdotes, notification } = store.getState()   
      const addAnectdote = (event) =>{
        event.preventDefault();
        const content = event.target.anecdote.value;
        console.log("content",content);
        anectdotes.dispatch(createAnectdote({
          content
        }));
        console.log(votedMessage("content"));
        notification.dispatch();
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