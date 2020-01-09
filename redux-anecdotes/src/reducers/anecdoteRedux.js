import anecdoteService from "../services/anecdoteService";
const reducer = (state = [], action) => {
  switch(action.type){
    case 'INIT_ANECDOTES':
      return action.data
    case "NEW_ANECTDOTE":
      console.log(action.data);
      return state.concat(action.data)
    case "GET_ANECTDOTES":
      return state 
    case "VOTE_ANECTDOTE":
      return state.map(anec =>{
        if(action.data.id===anec.id){
          return{...anec,votes:anec.votes+1}
        }else{
          return anec;
        }
      });
    default:
      return state
  }

}

export const initializeAnecdotes = () => {
  
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }

}

export const createAnectdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECTDOTE',
      data: newAnecdote,
    })
  }
}

export const voteAnectdote = (id) =>{
  console.log("voted for",id);
  return{
    type: 'VOTE_ANECTDOTE',
    data:{id}
  }
}

export default reducer