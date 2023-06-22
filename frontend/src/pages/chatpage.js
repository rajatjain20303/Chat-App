import React, { useEffect, useState,Component } from 'react'

import axios from 'axios'
const Chatpage = () => {

  const [chat,setchat]= useState([]);


    var chatfetch=async ()=>{
        var {data}= await axios.get('/chats')
        
        setchat(data);
    }
    useEffect(()=>{
      chatfetch()
    },[])
    return (
    <div>
      {chat.map(chat=> <div key={chat._id}>{chat.chatName}</div> )}
    </div>
  )
}

export default Chatpage
