"use client";

import { useState } from 'react';

type MessageFormProps = {
  onSend: (prompt: string) => Promise<void>; // ou juste () => void si pas async
};

function MessageForm(prop :MessageFormProps) {
    const [prompt, setPrompt] = useState("");    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        prop.onSend(prompt);  
        setPrompt("");
    };

    return (
        <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask your question !"
        required
        className="flex-1 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Send
    </button>
    </form>
  </div>
    )
}

export default MessageForm