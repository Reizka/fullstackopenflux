
const initialState ={
    content:"place holder"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
      case "NOTIFICATION":
        return {...action,content:action.data.text}
      case "CLEAR":
        return{...action,notification:""} 
      default:
        return state
    }
  
  }
  
  export const clearMessage = (content) => {
    return {
      type: 'CLEAR'
    }
  }

  export const message = (message,waitForSec) => {
    return async dispatch => {
     
      dispatch({
        type: 'NOTIFICATION',
        data:{
            text:message
        }
      })
    }
  
  }


  export default reducer