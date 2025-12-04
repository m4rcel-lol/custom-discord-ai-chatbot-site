export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
  senderName: string;
  avatarUrl: string;
}

export interface User {
  id: string;
  name: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  avatarUrl: string;
}

export interface Channel {
  id: string;
  name: string;
  type: 'dm' | 'group';
  status?: 'online' | 'idle' | 'dnd' | 'offline';
  avatarUrl?: string;
}
