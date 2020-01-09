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

  export const customMessage = (content) => {
    return {
      type: 'NOTIFICATION',
      data:{
        text:content
      }
    }
  }

  export const welcomeMessage = () => {
    return {
      type: 'NOTIFICATION',
      data:{
        text:"Welcome to redux app!"
      }
    }
  }
  
  export const votedMessage = (votedFor) =>{
    return{
      type: 'NOTIFICATION',
      data:{
          text:"You voted for: "+votedFor
      }
    }
  }
 
  export const errorMessage = (error) =>{
    return{
      type: 'NOTIFICATION',
      data:{
          text: "Uh oh,  Something went wrong! "
      }
    }
  }
  export default reducer