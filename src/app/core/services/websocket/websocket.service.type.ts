export enum MessageType {
  TOOL = 'tool-chat',
  CHAT = 'ai-chat',
}

export interface AIChunkMessage {
  type: 'chunk';
  content: string;
  messageType?: MessageType;
}

export interface AIDoneMessage {
  type: 'done';
  messageType?: MessageType;
}

export interface AIErrorMessage {
  type: 'error';
  message: string;
  messageType?: MessageType;
}

export type AIResponseMessage = AIChunkMessage | AIDoneMessage | AIErrorMessage;
