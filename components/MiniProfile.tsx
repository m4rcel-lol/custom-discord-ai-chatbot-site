import React, { useEffect, useRef } from 'react';
import { StaffBadge, CertifiedBadge, BugHunterBadge, VerifiedBotBadge } from './Badges';

interface MiniProfileProps {
  user: {
    name: string;
    avatarUrl: string;
    isBot: boolean;
    username: string;
    color: string;
    theme?: string;
    bannerUrl?: string;
  };
  position: { x: number, y: number };
  onClose: () => void;
  onOpenFullProfile: (user: any) => void;
}

const MiniProfile: React.FC<MiniProfileProps> = ({ user, position, onClose, onOpenFullProfile }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const style: React.CSSProperties = {
    top: Math.min(position.y, window.innerHeight - 400), // Prevent going off bottom
    left: position.x + 20, // Offset to right
    background: user.theme || '#232428'
  };

  const handleAvatarClick = () => {
    onClose(); // Close mini profile
    onOpenFullProfile(user); // Open full profile
  };

  return (
    <div 
      ref={ref}
      style={style}
      className="fixed z-50 w-[300px] rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.24)] overflow-hidden animate-scale-in"
    >
      {/* Banner */}
      <div 
        className="h-[60px] w-full relative bg-cover bg-center" 
        style={{ 
            backgroundColor: user.color,
            backgroundImage: user.bannerUrl ? `url(${user.bannerUrl})` : undefined
        }} 
      />

      <div className="relative px-4 pb-4">
        {/* Avatar */}
        <div className="absolute -top-[30px] left-4 group cursor-pointer" onClick={handleAvatarClick}>
           <div 
                className="w-[80px] h-[80px] rounded-full p-[6px] relative"
                style={{ background: user.theme || '#232428' }}
           >
              <div className="w-full h-full bg-[#232428] rounded-full overflow-hidden relative">
                  <img src={user.avatarUrl} alt={user.name} className="w-full h-full rounded-full transition-opacity group-hover:opacity-80 object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] text-white font-bold transition-opacity z-10">
                  VIEW PROFILE
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#23a559] border-[4px] border-[#232428] rounded-full z-20"></div>
           </div>
        </div>
        
        {/* Badges */}
        {user.isBot && (
            <div className="flex justify-end pt-3 pb-1">
                <div className="bg-[#111214]/50 rounded-lg p-1 flex gap-1 border border-[#1e1f22]/50 backdrop-blur-sm">
                    <StaffBadge />
                    <CertifiedBadge />
                    <BugHunterBadge />
                </div>
            </div>
        )}
        {!user.isBot && <div className="h-6"></div>}

        {/* Info */}
        <div className={`mt-8 rounded-lg p-3 pb-4 ${user.theme ? 'bg-[#111214]/60 border border-[#1e1f22]/50 backdrop-blur-md' : 'bg-[#111214]'}`}>
             <div className="flex items-center flex-wrap gap-1">
                <span className="text-xl font-bold text-white hover:underline cursor-pointer" onClick={handleAvatarClick}>{user.name}</span>
                {user.isBot && <VerifiedBotBadge />}
             </div>
             <div className="text-sm text-[#dbdee1] mb-3">{user.username}</div>
             
             <div className="h-[1px] bg-[#2e2f34] w-full mb-3" />

             <div className="uppercase text-[11px] font-bold text-[#b5bac1] mb-1">About Me</div>
             <div className="text-sm text-[#dbdee1]">
                {user.isBot 
                    ? "I am a helpful AI assistant residing in your Discord DMs." 
                    : "Just a human chatting with an AI."}
             </div>
             
             <div className="uppercase text-[11px] font-bold text-[#b5bac1] mt-3 mb-1">Member Since</div>
             <div className="text-sm text-[#dbdee1]">Feb 21, 2024</div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;