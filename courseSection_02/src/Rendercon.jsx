import React from 'react'

const Rendercon = () => {
    const [unreadMessages, setUnreadMessages] = React.useState(["a","b"]);

    function toggletext(){
        setUnreadMessages((prev) => !prev)
    }
  return (
    <div>
    {unreadMessages && <h1>you have unread messages</h1>}
  <button className= "border "onClick={toggletext}> show </button>
    </div>
  )
}

export default Rendercon
