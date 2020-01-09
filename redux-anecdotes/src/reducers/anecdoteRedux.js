const getId = () => (100000 * Math.random()).toFixed(0)


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

export const initializeAnecdotes = (notes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: notes
  }
}

export const createAnectdote = (data) => {
  return {
    type: 'NEW_ANECTDOTE',
    data
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