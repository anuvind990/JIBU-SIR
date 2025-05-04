
import React from "react";
import { cn } from "@/lib/utils";
import { Bot, MessageCircle } from "lucide-react";
import { LanguageHighlighter } from "./LanguageHighlighter";

export interface MessageProps {
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const MessageBubble = ({ content, sender, timestamp }: MessageProps) => {
  const isUser = sender === "user";

  // Format the timestamp
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Function to detect and format code blocks
  const formatContent = (text: string) => {
    // Pattern for code blocks: ```language code ```
    const codeBlockRegex = /```([a-z]*)\n([\s\S]*?)```/g;
    
    // Split by code blocks
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: text.substring(lastIndex, match.index) });
      }
      
      // Add code block
      const language = match[1] || "text";
      const code = match[2];
      parts.push({ type: "code", language, content: code });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.substring(lastIndex) });
    }
    
    return parts.map((part, index) => {
      if (part.type === "text") {
        return <p key={index} className="whitespace-pre-wrap">{part.content}</p>;
      } else {
        return (
          <LanguageHighlighter 
            key={index} 
            language={part.language} 
            code={part.content} 
          />
        );
      }
    });
  };

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-bounce-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] items-start space-x-2",
          isUser && "flex-row-reverse space-x-reverse"
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted"
          )}
        >
          {isUser ? <MessageCircle size={18} /> : <Bot size={18} />}
        </div>

        <div>
          <div
            className={cn(
              "rounded-lg p-3 shadow-sm",
              isUser
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            )}
          >
            <div className="message-content">{formatContent(content)}</div>
          </div>
          <div
            className={cn(
              "mt-1 select-none text-xs text-muted-foreground",
              isUser ? "text-right" : "text-left"
            )}
          >
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
