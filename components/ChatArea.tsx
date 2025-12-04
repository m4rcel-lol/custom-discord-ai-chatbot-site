import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { VerifiedBotBadge, StaffBadge, CertifiedBadge, BugHunterBadge } from './Badges';
import MiniProfile from './MiniProfile';

interface ChatAreaProps {
  activeChannelName: string;
  onOpenFullProfile: (user: any) => void;
}

const GEMINI_AVATAR = 'https://raw.githubusercontent.com/m4rcel-lol/assets/f08fbf7f9e51418c372697e2df89ddb28c59efe3/rectangle-gemini-google-icon-symbol-logo-free-png.webp';
const USER_AVATAR = 'https://picsum.photos/seed/me/50/50';
const GEMINI_BANNER = 'https://raw.githubusercontent.com/m4rcel-lol/assets/13ebd5bfa7abe5ee591107b9a7b411f3e3ae2d13/Gemini-API-IoT-banner_1.original.png';

const ChatArea: React.FC<ChatAreaProps> = ({ activeChannelName, onOpenFullProfile }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: `Hello! I'm your AI assistant. I support **bold**, *italics*, \`code\`, and code blocks:
\`\`\`javascript
console.log("Hello Discord!");
\`\`\`
Ask me anything!`,
      timestamp: new Date(),
      senderName: 'Gemini AI',
      avatarUrl: GEMINI_AVATAR
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Popout State
  const [popoutUser, setPopoutUser] = useState<any>(null);
  const [popoutPos, setPopoutPos] = useState({ x: 0, y: 0 });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
      senderName: 'You',
      avatarUrl: USER_AVATAR
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputValue, messages);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: responseText,
        timestamp: new Date(),
        senderName: 'Gemini AI',
        avatarUrl: GEMINI_AVATAR
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const handleUserClick = (e: React.MouseEvent, msg: Message) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoutPos({ x: rect.right, y: rect.top });
    
    setPopoutUser({
        name: msg.senderName,
        avatarUrl: msg.avatarUrl,
        isBot: msg.role === 'model',
        username: msg.role === 'model' ? 'gemini_ai' : 'current_user',
        color: msg.role === 'model' ? '#5865F2' : '#f0b232', // Banner/Accent Color
        theme: msg.role === 'model' 
            ? 'linear-gradient(to bottom right, #4c1d95, #1e40af)' // Darker Purple-Blue Gradient for better text visibility
            : '#232428', // Default Dark Gray for User
        bannerUrl: msg.role === 'model' ? GEMINI_BANNER : undefined
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#313338] h-full relative min-w-0 animate-fade-in">
      {/* Header */}
      <div className="h-12 border-b border-[#26272D] flex items-center justify-between px-4 shadow-sm z-10 select-none">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="text-[#80848e] text-2xl font-light">@</div>
          <h3 className="font-bold text-[#f2f3f5] truncate text-base">{activeChannelName}</h3>
          
          <div className="flex items-center gap-1.5 ml-2">
            <div className="w-2.5 h-2.5 bg-[#23a559] rounded-full"></div>
          </div>
          
          <VerifiedBotBadge />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col">
          {/* Welcome Placeholder */}
          <div className="mt-4 mb-8 px-4 animate-slide-up">
             <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg overflow-hidden bg-[#232428]">
               <img src={GEMINI_AVATAR} alt="Gemini" className="w-full h-full object-cover" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-2">
               <span className="font-bold">{activeChannelName}</span>
             </h2>
             <div className="text-[#b5bac1] text-sm flex items-center gap-2">
                <span>Verified System Bot</span>
                <span className="w-1 h-1 bg-[#b5bac1] rounded-full"></span>
                <span>This is a temporary chat conversation with </span> <span>{activeChannelName}</span> <span>Your messages will be lost after refreshing the site.</span>
             </div>
          </div>

          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            
            return (
              <div 
                key={msg.id} 
                className="group flex justify-start w-full hover:bg-[#2e3035] -mx-4 px-8 py-0.5 mt-[1.0625rem] first:mt-0 animate-fade-in"
                style={{ width: 'calc(100% + 2rem)' }}
              >
                <div className="flex gap-4 w-full">
                    
                    {/* Avatar */}
                    <div 
                        className="flex-shrink-0 mt-0.5 cursor-pointer hover:drop-shadow-md transition-all active:translate-y-[1px]"
                        onClick={(e) => handleUserClick(e, msg)}
                    >
                        <img 
                          src={msg.avatarUrl} 
                          alt={msg.senderName} 
                          className="w-10 h-10 rounded-full hover:opacity-90 transition-opacity"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start w-full min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span 
                                className="text-[#f2f3f5] font-medium hover:underline cursor-pointer text-[1rem]"
                                onClick={(e) => handleUserClick(e, msg)}
                            >
                                {msg.senderName}
                            </span>
                            
                            {!isUser && (
                                <div className="flex items-center gap-1 select-none">
                                    <VerifiedBotBadge />
                                    <div className="flex items-center ml-1 space-x-0.5">
                                        <StaffBadge />
                                        <CertifiedBadge />
                                        <BugHunterBadge />
                                    </div>
                                </div>
                            )}

                            <span className="text-xs text-[#949ba4] font-medium ml-1 mt-[1px]">
                                {formatTime(msg.timestamp)}
                            </span>
                        </div>
                        
                        <div className="text-[#dbdee1] leading-[1.375rem] w-full markdown-content text-[0.95rem]">
                            <ReactMarkdown>
                                {msg.content}
                            </ReactMarkdown>
                        </div>
                    </div>

                </div>
              </div>
            );
          })}
          
          {isLoading && (
            <div className="flex items-start gap-4 mt-[1.0625rem] px-4 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-[#404249] animate-pulse"></div>
                <div className="space-y-2 pt-1 w-full max-w-lg">
                   <div className="h-4 bg-[#404249] rounded w-24 animate-pulse"></div>
                   <div className="h-4 bg-[#404249] rounded w-48 animate-pulse"></div>
                </div>
            </div>
          )}

          <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2 bg-[#313338]">
        <div className="relative bg-[#383a40] rounded-lg flex items-center px-4 py-3 transition-colors focus-within:ring-1 focus-within:ring-[#00A8FC]">
          
          <input
            type="text"
            className="bg-transparent flex-1 text-[#dbdee1] outline-none placeholder-[#949ba4] h-[24px] font-normal"
            placeholder={`Message @${activeChannelName}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            autoFocus
          />
        </div>
        
        {isLoading && (
            <div className="absolute bottom-1 left-4 text-[10px] font-bold text-[#dbdee1] animate-pulse">
                Gemini AI is typing...
            </div>
        )}
      </div>
      
      {popoutUser && (
        <MiniProfile 
            user={popoutUser} 
            position={popoutPos} 
            onClose={() => setPopoutUser(null)}
            onOpenFullProfile={onOpenFullProfile} 
        />
      )}
    </div>
  );
};

export default ChatArea;