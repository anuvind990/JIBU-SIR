
import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import { Card } from "@/components/ui/card";
import { MessageProps } from "./MessageBubble";
import { getResponseForMessage } from "@/lib/chatbot-knowledge";
import { searchWeb } from "@/lib/search-service";
import { toast } from "@/hooks/use-toast";

const ChatBot = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: MessageProps = {
      content,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setIsProcessing(true);

    try {
      // Simulate bot thinking
      toast({
        title: "Searching web resources...",
        description: "JIBU SIR is analyzing the best results for your query.",
        duration: 3000,
      });

      // Search web (in a real app, we would process these results)
      const searchResults = await searchWeb(content);
      
      // Get local knowledge base response
      const baseResponse = getResponseForMessage(content);
      
      // Combine results for a more comprehensive answer
      let finalResponse = baseResponse;
      
      if (searchResults.length > 0) {
        finalResponse += "\n\n**Web Resources:**\n";
        searchResults.forEach(result => {
          finalResponse += `\n- [${result.title}](${result.url})\n  ${result.snippet}`;
        });
      }

      // Add bot response
      const botMessage: MessageProps = {
        content: finalResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error processing message:", error);
      
      // Fallback response if search fails
      const errorMessage: MessageProps = {
        content: "I'm having trouble connecting to web resources at the moment. Here's what I know based on my local knowledge:\n\n" + getResponseForMessage(content),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg flex flex-col h-[80vh] border overflow-hidden">
      <ChatHeader />
      <div className="flex-1 overflow-hidden flex flex-col">
        <ChatMessageList messages={messages} isTyping={isTyping} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isProcessing={isProcessing} />
    </Card>
  );
};

export default ChatBot;
