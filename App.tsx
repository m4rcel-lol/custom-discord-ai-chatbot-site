import React, { useState, useEffect } from 'react';
import ChatArea from './components/ChatArea';
import UserProfileSidebar from './components/UserProfileSidebar';
import FullProfileModal from './components/FullProfileModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeChannelName] = useState('Gemini AI');
  const [activeFullProfile, setActiveFullProfile] = useState<any>(null);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-[#313338] flex flex-col items-center justify-center animate-fade-in">
        <div className="relative w-24 h-24 mb-4">
            {/* Simple Logo Placeholder */}
            <div className="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center mx-auto shadow-xl animate-bounce">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.25 4.5H4.75C3.50736 4.5 2.5 5.50736 2.5 6.75V17.25C2.5 18.4926 3.50736 19.5 4.75 19.5H19.25C20.4926 19.5 21.5 18.4926 21.5 17.25V6.75C21.5 5.50736 20.4926 4.5 19.25 4.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 10L12 14L15.5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
            </div>
        </div>
        <div className="text-[#dbdee1] font-bold text-lg animate-pulse">Starting Discord AI...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans bg-[#313338]">
      <ChatArea 
        activeChannelName={activeChannelName} 
        onOpenFullProfile={setActiveFullProfile}
      />
      <UserProfileSidebar onOpenFullProfile={setActiveFullProfile} />

      {activeFullProfile && (
        <FullProfileModal 
            user={activeFullProfile} 
            onClose={() => setActiveFullProfile(null)} 
        />
      )}
    </div>
  );
};

export default App;