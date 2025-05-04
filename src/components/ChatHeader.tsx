
import React from "react";
import { Bot } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";

const ChatHeader = () => {
  return (
    <Card className="border-b mb-0 rounded-b-none bg-primary text-primary-foreground">
      <CardHeader className="py-3">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold">JIBU SIR</h2>
            <p className="text-xs text-primary-foreground/80">
              Your programming assistant
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ChatHeader;
