
import React, { useEffect, useRef } from "react";
import { MessageProps } from "./MessageBubble";
import MessageBubble from "./MessageBubble";

interface ChatMessageListProps {
  messages: MessageProps[];
  isTyping: boolean;
}

const ChatMessageList = ({ messages, isTyping }: ChatMessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-center text-muted-foreground">
          <div>
            <h3 className="font-medium text-lg">Welcome to Code Buddy!</h3>
            <p className="max-w-md mt-2">
              Ask me anything about Python, Java, HTML, CSS, JavaScript and other programming languages. I'm here to help with your coding questions!
            </p>
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <MessageBubble 
            key={index} 
            content={message.content} 
            sender={message.sender} 
            timestamp={message.timestamp} 
          />
        ))
      )}
      
      {isTyping && (
        <div className="flex items-center space-x-2 text-muted-foreground">
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></span>
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></span>
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></span>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessageList;
