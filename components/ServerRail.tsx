import React from 'react';
import { Compass, Plus, Download, Home } from 'lucide-react';

const ServerRail: React.FC = () => {
  return (
    <div className="hidden sm:flex flex-col items-center w-[72px] bg-[#1e1f22] py-3 space-y-2 overflow-y-auto no-scrollbar">
      {/* Home Icon */}
      <div className="group relative flex items-center justify-center w-12 h-12 bg-[#5865F2] text-white rounded-[16px] cursor-pointer transition-all duration-200 hover:rounded-[16px] hover:bg-[#5865F2]">
         <Home size={28} />
         <div className="absolute left-0 w-1 h-8 bg-white rounded-r-full -ml-4" />
      </div>

      <div className="w-8 h-[2px] bg-[#35363C] rounded-lg mx-auto" />

      {/* Mock Servers */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="group relative flex items-center justify-center w-12 h-12 bg-[#313338] hover:bg-[#5865F2] text-gray-100 hover:text-white rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer">
          <img 
            src={`https://picsum.photos/seed/server${i}/50/50`} 
            alt="Server" 
            className="w-full h-full object-cover rounded-[inherit]"
          />
          <div className="absolute left-0 w-1 h-2 bg-white rounded-r-full -ml-4 opacity-0 group-hover:opacity-100 group-hover:h-5 transition-all duration-200" />
        </div>
      ))}

      <div className="group relative flex items-center justify-center w-12 h-12 bg-[#313338] hover:bg-[#23a559] text-[#23a559] hover:text-white rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer">
        <Plus size={24} />
      </div>

      <div className="group relative flex items-center justify-center w-12 h-12 bg-[#313338] hover:bg-[#23a559] text-[#23a559] hover:text-white rounded-[24px] hover:rounded-[16px] transition-all duration-200 cursor-pointer">
        <Compass size={24} />
      </div>
    </div>
  );
};

export default ServerRail;
