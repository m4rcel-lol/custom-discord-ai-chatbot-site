import React from 'react';
import { StaffBadge, CertifiedBadge, BugHunterBadge, VerifiedBotBadge } from './Badges';

interface UserProfileSidebarProps {
    onOpenFullProfile: (user: any) => void;
}

const UserProfileSidebar: React.FC<UserProfileSidebarProps> = ({ onOpenFullProfile }) => {
  const geminiUser = {
    name: 'Gemini AI',
    avatarUrl: 'https://raw.githubusercontent.com/m4rcel-lol/assets/f08fbf7f9e51418c372697e2df89ddb28c59efe3/rectangle-gemini-google-icon-symbol-logo-free-png.webp',
    isBot: true,
    username: 'gemini_ai',
    color: '#5865F2',
    theme: 'linear-gradient(to bottom right, #4c1d95, #1e40af)', // Darker Purple-Blue Gradient for readability
    bannerUrl: 'https://raw.githubusercontent.com/m4rcel-lol/assets/13ebd5bfa7abe5ee591107b9a7b411f3e3ae2d13/Gemini-API-IoT-banner_1.original.png'
  };

  return (
    <div 
      className="hidden lg:flex flex-col w-[340px] h-full border-l border-[#2e2f34] overflow-y-auto custom-scrollbar animate-fade-in"
      style={{ background: geminiUser.theme }}
    >
      {/* Banner */}
      <div 
        className="h-[120px] w-full relative bg-cover bg-center" 
        style={{ 
            backgroundColor: geminiUser.color,
            backgroundImage: `url(${geminiUser.bannerUrl})`
        }} 
      >
         {/* Pencil icon on hover could go here */}
      </div>

      {/* Profile Header */}
      <div className="px-4 pb-3 mb-2 relative">
        {/* Avatar */}
        <div className="absolute -top-[44px] left-4" onClick={() => onOpenFullProfile(geminiUser)}>
          <div className="w-[88px] h-[88px] rounded-full p-[6px] relative group cursor-pointer" style={{ background: geminiUser.theme }}>
             <div className="w-full h-full bg-[#232428] rounded-full relative overflow-hidden">
                <img 
                  src={geminiUser.avatarUrl}
                  alt="Profile" 
                  className="w-full h-full rounded-full transition-opacity group-hover:opacity-80 object-cover"
                />
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] text-white font-bold transition-opacity z-10">
                VIEW PROFILE
             </div>
             <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#23a559] border-[5px] border-[#232428] rounded-full z-20"></div>
          </div>
        </div>

        {/* Badges Container */}
        <div className="flex justify-end pt-3 gap-1">
             <div className="bg-[#111214]/50 rounded-lg p-1 flex gap-1 border border-[#1e1f22]/50 backdrop-blur-sm">
                 <StaffBadge />
                 <CertifiedBadge />
                 <BugHunterBadge />
             </div>
        </div>

        {/* User Info */}
        <div className="mt-2 bg-[#111214]/60 p-3 rounded-lg border border-[#1e1f22]/50 backdrop-blur-md">
             <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-white cursor-pointer hover:underline" onClick={() => onOpenFullProfile(geminiUser)}>Gemini AI</span>
                <VerifiedBotBadge />
             </div>
             <div className="text-sm text-[#dbdee1] mt-0.5">gemini_ai</div>
             
             <div className="mt-3 border-t border-[#dbdee1]/20 pt-3">
                <div className="uppercase text-[11px] font-bold text-[#dbdee1]/70 mb-1.5">About Me</div>
                <div className="text-sm text-[#f2f3f5] leading-relaxed">
                   I am a large language model, trained by Google. I can help you with writing, learning, planning, and more.
                </div>
             </div>

             <div className="mt-3">
                <div className="uppercase text-[11px] font-bold text-[#dbdee1]/70 mb-1.5">Member Since</div>
                <div className="text-sm text-[#f2f3f5]">Feb 21, 2024</div>
             </div>
        </div>

        {/* Note */}
        <div className="mt-4 pt-4 border-t border-[#dbdee1]/20">
             <div className="uppercase text-[11px] font-bold text-[#dbdee1]/70 mb-2">Note</div>
             <textarea 
                className="w-full bg-transparent text-xs text-[#dbdee1] placeholder-[#dbdee1]/50 resize-none focus:outline-none h-8"
                placeholder="Click to add a note"
             />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSidebar;