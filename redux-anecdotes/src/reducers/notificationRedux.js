const initialState ={
    notification:"place holder"
}

const reducer = (state = initialState, action) => {
    console.log("MESSAGE",action);
    switch(action.type){
      case "NOTIFICATION":
        console.log(action.data.text);
        return {...action,notification:action.data.text}
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
      console.log("content sent",content);
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
      console.log("VOTE MESSAGE",votedFor);
    return{
      type: 'NOTIFICATION',
      data:{
          text:"You voted for: "+votedFor
      }
    }
  }
 
  export const errorMessage = (error) =>{
      console.log(error);
    return{
      type: 'NOTIFICATION',
      data:{
          text: "Uh oh,  Something went wrong! "
      }
    }
  }
  export default reducer