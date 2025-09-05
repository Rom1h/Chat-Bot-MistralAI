"use client"
import { useState } from "react";
import Chat from "../component/Chat";
import MessageForm from "../component/MessageForm";
import { ChatType } from "../data/type";
export default function Home() {
  const [chats, setChats] = useState< ChatType[]>([]);
  
  const sendPrompt =  async (prompt:string)=> {
        const chatsToJson = JSON.stringify(chats);
        const response = await fetch('/api/prompt?chats='+chatsToJson+"&prompt="+prompt);
        const data = await response.json();
        const responseToString = data.choices[0].message.content as string; 
        
        setChats([...chats, { role: "user", content: prompt }, { role: "assistant", content: responseToString }]); 
    }


  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      {chats.length === 0 && <h1 className='center'>Hey, welcome to the chat !</h1>}
      <Chat chats={chats}/>
      <div className="h-8" />
      <MessageForm onSend={sendPrompt} />
    </div>

  );
}
