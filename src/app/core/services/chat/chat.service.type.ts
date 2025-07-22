export interface Chat {
  id: string;
  title: string;
  messages?: Message[];
  isLoading: boolean;
}

export interface Message {
  id: string;
  content: string;
  role: 'ai' | 'user';
}
