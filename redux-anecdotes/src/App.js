import React from 'react';
import AnectdoteForm from "./components/AnectdoteForm"
import AnectdoteList from "./components/AnectdoteList"
const App = (props) => {
  const store = props.store;
  
  return(
    <div>
       <h2>Anecdotes</h2>
      <AnectdoteList store={store}/>
      <AnectdoteForm store={store}/>
    </div>
  )

}

export default App