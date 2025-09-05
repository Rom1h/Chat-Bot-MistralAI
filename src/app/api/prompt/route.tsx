import { Mistral } from '@mistralai/mistralai';
import { ChatType } from '../../../data/type';
// 
export const GET = async (req:Request) => {
    try{
       
        const client = new Mistral({apiKey: process.env.API_KEY });
        const { searchParams } = new URL(req.url);
        const prompt = searchParams.get("prompt") || "";
        const chatsJson = searchParams.get("chats") || "[]";
        const chats: ChatType[] = JSON.parse(chatsJson)
        
        chats.push({role:"user", content:prompt});
        
        const messages = chats.map(c => ({
        role: c.role as "user" | "assistant",
        content: c.content
        }));
        const response =  await client.chat.complete({
        model: 'mistral-small-latest',
        messages: messages,
        safePrompt:true

        }); 
        return new Response(JSON.stringify(response),
        {status:200})
    }catch(error){
        return new Response("Failed to fetch all",
        {status:500}) 
    }
}