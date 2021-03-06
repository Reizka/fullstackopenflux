import React from 'react';
import{createAnectdote} from '../reducers/anecdoteRedux'
import {message,clearMessage} from "../reducers/notificationRedux"
import { connect } from 'react-redux'
const AnectdoteForm = (props)=>{
    
      const addAnectdote = async (event) =>{
        event.preventDefault();

        const content = event.target.anecdote.value;
        event.target.anecdote.value="";
                
        props.createAnectdote(content);
        props.message(`${content} added`);
        setTimeout(()=>{
          props.clearMessage();
        },1000)
        
       
        
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
const mapStateToProps = (state) => {
    return {
      notification: state.notification,
      anecdotes: state.anecdotes
    }
  }

  


export default connect(
      mapStateToProps,
      {//MapStateToDispatch Wrap  
        createAnectdote,
        message,
        clearMessage
      }
      )(AnectdoteForm)
