import { ChatType } from '../data/type';
type ChatProps = {
  chats: ChatType[];
};

function Chat({chats}: ChatProps) {
  return (
    <div>
      {chats.map((c, i) => (
        <div key={i}>
            <p><strong>{c.role === "user" ? "User: " : "Assistant: "}</strong>{c.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Chat