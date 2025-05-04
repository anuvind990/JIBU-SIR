
import React from "react";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 bg-code-pattern p-4">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Programming Learning Assistant
          </h1>
          <p className="text-lg text-muted-foreground">
            Chat with JIBU SIR - your friendly AI programming tutor
          </p>
        </header>
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
