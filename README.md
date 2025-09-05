# Chatbot with Mistral AI

A simple demo project of a chatbot built with Next.js , TypeScript, using the Mistral AI API to generate responses.  

[Open demo](https://chat-bot-mistral-ai.vercel.app/)

## Features
- Chat interface.  
- Conversation history stored on the client side.  
- Messages sent to an internal API route that calls **Mistral AI (`mistral-small-latest`)**.  

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Rom1h/Chat-Bot-MistralAI.git
cd Chat-Bot-MistralAI
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file at the project root with your Mistral API key:

```
API_KEY=your_api_key
```

### 4. Run the application
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Usage
Once the app is running:

1. Type a message in the text box at the bottom of the page.  
2. Click on the Send button.  
3. The assistant will reply using Mistral AI.  
4. The full conversation will remain visible in the chat window until you refresh the page.  

## Notes
- This project is for demonstration purposes only.  
- Make sure to keep your API key safe and never expose it publicly.  
