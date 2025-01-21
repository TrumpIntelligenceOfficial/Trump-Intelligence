import React from 'react';
import { Message } from '../types';
import { User } from 'lucide-react';
import { TRUMP_STICKERS } from '../lib/constants';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const randomSticker =
    TRUMP_STICKERS[Math.floor(Math.random() * TRUMP_STICKERS.length)];

  return (
    <div
      className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center flex-shrink-0 transform transition-transform hover:scale-110 ${
          isUser
            ? 'bg-black rotate-12 hover:rotate-0 pixel-borders border-4 border-black'
            : ''
        }`}
      >
        {isUser ? (
          <User className="w-8 h-8 text-white" />
        ) : (
          <img
            src={randomSticker}
            alt="Trump Sticker"
            className="w-20 h-20 object-contain animate-float"
          />
        )}
      </div>
      <div className={`flex-1 min-w-0 ${isUser ? 'text-right' : ''}`}>
        <div
          className="text-sm font-bold mb-2"
          style={{
            fontFamily: 'VT323, monospace',
            color: isUser ? '#000000' : '#000000',
          }}
        >
          {isUser ? 'You' : 'Trump Intelligence'}
        </div>
        <div
          className={`inline-block max-w-[80%] pixel-borders px-6 py-4 border-4 border-black ${
            isUser
              ? 'bg-black text-white transform rotate-1'
              : 'bg-black text-white transform -rotate-1'
          }`}
        >
          <div
            className="prose prose-sm max-w-none font-bold"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
}