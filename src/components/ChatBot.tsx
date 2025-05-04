
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
  const [userName, setUserName] = useState("friend");

  // Add initial greeting when component mounts
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: MessageProps = {
        content: `Hello there! 👋 I'm JIBU SIR, your friendly programming assistant. What can I help you with today? Feel free to ask me about any programming language or concept!`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const handleSendMessage = async (content: string) => {
    // Check for name introduction
    const nameMatch = content.match(/my name is (\w+)/i) || content.match(/i(?:'| a)m (\w+)/i);
    if (nameMatch && nameMatch[1]) {
      setUserName(nameMatch[1]);
    }

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
      // Show a friendlier toast message
      toast({
        title: "Thinking...",
        description: "I'm searching for the best answer for you! Just a moment.",
        duration: 3000,
      });

      // Search web (in a real app, we would process these results)
      const searchResults = await searchWeb(content);
      
      // Get local knowledge base response
      const baseResponse = getResponseForMessage(content);
      
      // Add personalization to the response
      let personalizedIntro = "";
      if (content.toLowerCase().includes("hello") || content.toLowerCase().includes("hi")) {
        personalizedIntro = `Hi ${userName}! `;
      } else if (Math.random() > 0.7) {
        personalizedIntro = `${userName}, `;
      }
      
      // Combine results for a more comprehensive answer
      let finalResponse = personalizedIntro + baseResponse;
      
      // Add follow-up questions or encouragement
      const followUps = [
        "\n\nDid that help? Let me know if you need me to explain anything else!",
        "\n\nI hope that answers your question. What else would you like to know?",
        "\n\nDoes that make sense? Feel free to ask follow-up questions!",
        "\n\nAnything else you're curious about?",
      ];
      
      const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)];
      
      if (searchResults.length > 0) {
        finalResponse += "\n\n**Helpful Resources:**\n";
        searchResults.forEach(result => {
          finalResponse += `\n- [${result.title}](${result.url})\n  ${result.snippet}`;
        });
        finalResponse += randomFollowUp;
      } else {
        finalResponse += randomFollowUp;
      }

      // Add bot response with slight delay for more natural feel
      setTimeout(() => {
        const botMessage: MessageProps = {
          content: finalResponse,
          sender: "bot",
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
        setIsProcessing(false);
      }, 800);
    } catch (error) {
      console.error("Error processing message:", error);
      
      // Friendlier error message
      const errorMessage: MessageProps = {
        content: `Sorry about that, ${userName}! I'm having a bit of trouble connecting to my web resources right now. But I can still help based on what I know:\n\n${getResponseForMessage(content)}\n\nIs there anything specific you'd like me to explain further?`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
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
