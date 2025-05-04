
import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessageList from "./ChatMessageList";
import { Card } from "@/components/ui/card";
import { MessageProps } from "./MessageBubble";
import { getResponseForMessage } from "@/lib/chatbot-knowledge";

const ChatBot = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: MessageProps = {
      content,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setIsProcessing(true);

    // Simulate bot response with a delay
    setTimeout(() => {
      const response = getResponseForMessage(content);
      const botMessage: MessageProps = {
        content: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setIsProcessing(false);
    }, 1500);
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
