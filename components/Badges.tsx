import React from 'react';

// Updated to Green "Verified AI" style
export const VerifiedBotBadge = () => (
  <span className="flex items-center gap-[2px] bg-[#23a559] text-white text-[10px] px-[4px] rounded-[4px] h-[15px] select-none align-baseline ml-1.5 font-medium leading-none">
    <svg aria-label="Verified AI" aria-hidden="false" role="img" width="10" height="10" viewBox="0 0 16 15.2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1px]">
      <path d="M7.4,11.17,4.17,8.22,5.55,6.81l1.85,1.69L12.95,3l1.38,1.43L7.4,11.17Z" fill="currentColor"/>
    </svg>
    AI
  </span>
);

export const StaffBadge = () => (
  <div className="group/badge relative cursor-pointer hover:bg-[#3f4147] rounded p-0.5" title="Discord Staff">
    <img 
      src="https://raw.githubusercontent.com/m4rcel-lol/assets/27e24d3b15c32ba2d39e54d544b66ba2575e2e3d/865852-discord-clyde.png" 
      alt="Discord Staff" 
      className="w-[22px] h-[22px] object-contain" 
    />
  </div>
);

export const CertifiedBadge = () => (
  <div className="group/badge relative cursor-pointer hover:bg-[#3f4147] rounded p-0.5" title="Nitro Subscriber Since February 21st 2024">
     <img 
       src="https://raw.githubusercontent.com/m4rcel-lol/assets/283298c22f1a688c8277e1f6777144731bfdf1e0/67822-opal-nitro-tier.png"
       alt="Nitro Subscriber"
       className="w-[22px] h-[22px] object-contain"
     />
  </div>
);

export const BugHunterBadge = () => (
  <div className="group/badge relative cursor-pointer hover:bg-[#3f4147] rounded p-0.5" title="This Chatbot has been made by Google">
     <img 
       src="https://raw.githubusercontent.com/m4rcel-lol/assets/0d09cd59eed6bf752d4dfdcfb21dada876860012/47207-google.png"
       alt="Made by Google"
       className="w-[22px] h-[22px] object-contain"
     />
  </div>
);