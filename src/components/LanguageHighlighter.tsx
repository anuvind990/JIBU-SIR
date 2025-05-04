
import React from 'react';
import { cn } from '@/lib/utils';

interface LanguageHighlighterProps {
  language: string;
  code: string;
}

export const LanguageHighlighter = ({ language, code }: LanguageHighlighterProps) => {
  // Simple syntax highlighting for different languages
  const formatCode = (lang: string, codeStr: string) => {
    // This is a simplified version of syntax highlighting
    // In a production app, you'd use a library like Prism.js or highlight.js
    const languageName = lang || "text";
    
    return (
      <div className="code-block relative">
        <div className="absolute top-0 right-0 bg-code-accent text-xs px-2 py-1 rounded-bl text-white">
          {languageName}
        </div>
        <pre className="pt-6 font-mono text-sm overflow-x-auto">
          {codeStr}
        </pre>
      </div>
    );
  };

  return formatCode(language, code);
};
