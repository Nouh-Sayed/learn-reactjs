import React from 'react'

const Rendercon = () => {
    const [unreadMessages, setUnreadMessages] = React.useState([]);


  return (
    <div> 
      {unreadMessages.length === 0 &&  <h1>you are all caught up</h1>}
    {unreadMessages.length === 1 &&  <h1>you have <b>1</b> unread message</h1>}
    {unreadMessages.length>= 2 &&  <h1>you have <b>{unreadMessages.length}</b> unread messages</h1>}


    </div>
  )
}

export default Rendercon
