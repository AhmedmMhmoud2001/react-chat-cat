
import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SendMessage from "../SendMessage/SendMessage";
import './ChatBox.css'
const ChatBox = () => {
    const [user] = useAuthState(auth);
    const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
         <div key={message.id}
         className={`chat-bubble ${message.uid === user.uid ? "right" : "left"}`}>
          <div className="chat-bubble__left">
          <img  src={message.avatar} alt="user avatar"/>
          <p className="user-name">{message.name}</p>
          </div>
         {
            // console.log(message.uid,user.uid)
            
         }
         <div className="chat-bubble__right">
           <p className="user-message">{message.text}</p>
         </div>
       </div>
        ))}
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;