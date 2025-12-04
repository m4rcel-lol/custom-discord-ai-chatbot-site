import React from 'react';
import { User, Plus, X } from 'lucide-react';
import { Channel } from '../types';

interface DMListProps {
  activeChannelId: string;
  onSelectChannel: (id: string) => void;
}

const MOCK_CHANNELS: Channel[] = [
  { id: '1', name: 'Gemini AI', type: 'dm', status: 'online', avatarUrl: 'https://picsum.photos/seed/gemini/50/50' },
  { id: '2', name: 'Wumpus', type: 'dm', status: 'idle', avatarUrl: 'https://picsum.photos/seed/wumpus/50/50' },
  { id: '3', name: 'Clyde', type: 'dm', status: 'dnd', avatarUrl: 'https://picsum.photos/seed/clyde/50/50' },
  { id: '4', name: 'Nelly', type: 'dm', status: 'offline', avatarUrl: 'https://picsum.photos/seed/nelly/50/50' },
];

const DMList: React.FC<DMListProps> = ({ activeChannelId, onSelectChannel }) => {
  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col h-full hidden md:flex">
      {/* Search / Find Button */}
      <div className="h-12 shadow-sm flex items-center px-2.5 shadow-md z-10">
        <button className="w-full text-left text-sm bg-[#1e1f22] text-[#949ba4] px-2 py-1.5 rounded-[4px] truncate">
          Find or start a conversation
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5 custom-scrollbar">
        <div className="flex items-center justify-between px-2 pt-2 pb-1 text-[#949ba4] hover:text-[#dbdee1] cursor-pointer">
          <span className="text-xs font-bold uppercase tracking-wide">Direct Messages</span>
          <Plus size={14} />
        </div>

        {MOCK_CHANNELS.map((channel) => (
          <div
            key={channel.id}
            onClick={() => onSelectChannel(channel.id)}
            className={`group flex items-center gap-3 px-2 py-2 rounded-[4px] cursor-pointer transition-colors ${
              activeChannelId === channel.id
                ? 'bg-[#404249] text-white'
                : 'text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]'
            }`}
          >
            <div className="relative">
              <img
                src={channel.avatarUrl}
                alt={channel.name}
                className="w-8 h-8 rounded-full"
              />
              {channel.status && (
                 <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 border-[3px] border-[#2b2d31] rounded-full flex items-center justify-center
                    ${channel.status === 'online' ? 'bg-[#23a559]' : ''}
                    ${channel.status === 'idle' ? 'bg-[#f0b232]' : ''}
                    ${channel.status === 'dnd' ? 'bg-[#f23f43]' : ''}
                    ${channel.status === 'offline' ? 'bg-[#80848e]' : ''}
                 `}>
                   {channel.status === 'idle' && <div className="w-2 h-2 bg-[#2b2d31] rounded-full absolute -top-0.5 -left-0.5" />}
                   {channel.status === 'dnd' && <div className="w-1.5 h-0.5 bg-[#2b2d31] rounded-full" />}
                 </div>
              )}
            </div>
            <div className="flex-1 truncate">
              <span className={`font-medium ${activeChannelId === channel.id ? 'text-white' : 'text-[#dbdee1]'}`}>
                {channel.name}
              </span>
              {channel.id === '1' && <span className="ml-1 text-[10px] bg-[#5865F2] text-white px-1 rounded-[3px] py-[1px]">BOT</span>}
            </div>
            <X size={14} className="opacity-0 group-hover:opacity-100 text-[#949ba4] hover:text-white" />
          </div>
        ))}
      </div>

      {/* User Area */}
      <div className="bg-[#232428] px-2 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 group hover:bg-[#3f4147] p-1 rounded-md cursor-pointer -ml-1">
          <div className="relative">
            <img src="https://picsum.photos/seed/me/50/50" alt="Me" className="w-8 h-8 rounded-full" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#23a559] border-[3px] border-[#232428] rounded-full"></div>
          </div>
          <div className="text-xs">
            <div className="font-semibold text-white">Current User</div>
            <div className="text-[#dbdee1] opacity-60">#1234</div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center">
            {/* Minimal controls simulation */}
        </div>
      </div>
    </div>
  );
};

export default DMList;
