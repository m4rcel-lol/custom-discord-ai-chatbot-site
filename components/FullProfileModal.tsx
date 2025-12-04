import React from 'react';
import { StaffBadge, CertifiedBadge, BugHunterBadge, VerifiedBotBadge } from './Badges';
import { X } from 'lucide-react';

interface FullProfileModalProps {
  user: {
    name: string;
    avatarUrl: string;
    isBot: boolean;
    username: string;
    color: string;
    theme?: string;
    bannerUrl?: string;
  };
  onClose: () => void;
}

const FullProfileModal: React.FC<FullProfileModalProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 animate-fade-in" onClick={onClose}>
      <div 
        className="w-[600px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in relative"
        style={{ background: user.theme || '#111214' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Banner */}
        <div 
          className="h-[210px] w-full relative bg-cover bg-center" 
          style={{ 
              backgroundColor: user.color,
              backgroundImage: user.bannerUrl ? `url(${user.bannerUrl})` : undefined
          }} 
        >
             {/* Close Button */}
             <div className="absolute top-4 right-4 z-10">
                <div 
                    onClick={onClose}
                    className="w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center cursor-pointer text-white transition-colors backdrop-blur-sm"
                >
                    <X size={18} />
                </div>
             </div>
        </div>

        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="absolute -top-[70px] left-6">
             <div 
                className="w-[136px] h-[136px] rounded-full p-[8px] relative"
                style={{ background: user.theme || '#111214' }}
             >
                <div className="w-full h-full bg-[#111214] rounded-full overflow-hidden relative">
                    <img src={user.avatarUrl} alt={user.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#23a559] border-[6px] border-[#111214] rounded-full z-20"></div>
             </div>
          </div>

          {/* Top Badges */}
          {user.isBot && (
              <div className="flex justify-end pt-4 pb-2">
                  <div className="bg-[#232428]/50 rounded-lg p-1.5 flex gap-1.5 border border-[#1e1f22]/50 backdrop-blur-sm">
                      <StaffBadge />
                      <CertifiedBadge />
                      <BugHunterBadge />
                  </div>
              </div>
          )}
          {!user.isBot && <div className="h-10"></div>}

          {/* Info Card */}
          <div className={`mt-8 rounded-2xl p-4 ${user.theme ? 'bg-[#232428]/60 backdrop-blur-md' : 'bg-[#232428]'}`}>
               {/* Name Header */}
               <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-white">{user.name}</span>
                  {user.isBot && <VerifiedBotBadge />}
               </div>
               <div className="text-base text-[#dbdee1] mb-5">{user.username}</div>

               {/* Divider */}
               <div className="h-[1px] bg-[#3f4147] w-full mb-4" />

               {/* About Me */}
               <div className="mb-6">
                    <div className="uppercase text-[12px] font-bold text-[#b5bac1] mb-2">About Me</div>
                    <div className="text-sm text-[#dbdee1] leading-relaxed">
                        {user.isBot 
                            ? "I am a highly advanced Large Language Model, trained by Google. I can help you with writing, learning, planning, and more. I am designed to be helpful, harmless, and honest." 
                            : "Just a human chatting with an AI. Enjoys long walks on the digital beach and dark mode UIs."}
                    </div>
               </div>

               {/* Member Since */}
               <div className="flex gap-12">
                   <div>
                       <div className="uppercase text-[12px] font-bold text-[#b5bac1] mb-1">Member Since</div>
                       <div className="text-sm text-[#dbdee1]">Feb 21, 2024</div>
                   </div>
               </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullProfileModal;