import React from 'react'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 5
  }
console.log(props.store.getState());
  return (
    <div style={style}>
     {props.store.getState().notification.notification}
    </div>
  )
}

export default Notification