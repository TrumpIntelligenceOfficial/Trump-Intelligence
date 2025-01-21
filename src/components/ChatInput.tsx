import React, { useState } from 'react';
import { Send, Mic, FlipHorizontal as PaperclipHorizontal } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div className="relative">
      {/* Trump Sticker */}
      <div className="absolute -top-40 right-4 w-40 h-40 transform hover:scale-110 transition-all">
        <img
          src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1737478112/76e8ae06-3de3-403d-85e5-af942aef3de7-removebg-preview_c0ypip.png"
          alt="Trump Sticker"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="overflow-hidden pixel-borders border-4 border-black bg-white transform -rotate-1">
          <div className="flex items-end gap-2 p-4">
            <button
              type="button"
              className="p-2 text-black hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-110"
            >
              <PaperclipHorizontal className="w-6 h-6" />
            </button>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Ask President Trump anything..."
              rows={1}
              disabled={disabled}
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-black placeholder:text-black/50 focus:ring-0 text-lg font-bold"
              style={{ fontFamily: 'VT323, monospace' }}
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 text-black hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-110"
              >
                <Mic className="w-6 h-6" />
              </button>
              <button
                type="submit"
                disabled={disabled || !input.trim()}
                className="inline-flex items-center gap-2 pixel-borders bg-black px-6 py-3 text-white font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 border-4 border-black"
                style={{ fontFamily: 'VT323, monospace' }}
              >
                Send
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
