import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'
 
export default (Chat = () => {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    socket = io('https://hisserverapp.herokuapp.com');
    this.socket.on('chat message', msg => {
      var obj = JSON.parse(msg);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages,[
          {
            _id: obj[0]._id,
            text: obj[0].text,
            createdAt: obj[0].createdAt,
            user: {
              _id: obj[0].user._id,
              name: obj[0].user.name,
              avatar: obj[0].user.avatar,
            },
          },
        ]));
    });
  }, []);
  const onSend = (messages) => {
    this.socket.emit('chat message', JSON.stringify(messages));
  };
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        createdAt: new Date(),
        avatar: 'https://placeimg.com/140/140/people',
      }}
      showUserAvatar
    />
  )
})