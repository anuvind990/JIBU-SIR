
import React, { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, Smile } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput = ({ onSendMessage, isProcessing }: ChatInputProps) => {
  const [message, setMessage] = useState<string>("");

  const placeholders = [
    "Ask me about Python...",
    "Curious about JavaScript?",
    "Need help with Java?",
    "Want to learn React?",
    "SQL giving you trouble?",
    "Ask me anything about coding!",
  ];
  
  const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

  const handleSend = () => {
    if (message.trim() && !isProcessing) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="border-t rounded-t-none p-3">
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <Input
            placeholder={randomPlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={isProcessing}
            className="pr-10"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Smile className="h-4 w-4" />
          </div>
        </div>
        <Button onClick={handleSend} disabled={!message.trim() || isProcessing}>
          <MessageCircle className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </Card>
  );
};

export default ChatInput;
