export enum MessageType {
  TOOL = 'tool-chat',
  CHAT = 'ai-chat',
}

export type ConnectionType = 'ai-chat' | 'ai-tool';

export interface ConnectionTypeMessage {
  type: 'connection-type';
  data: ConnectionType;
}

export interface WebSocketErrorMessage {
  type: 'error';
  data: {message: string};
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

export type WebSocketMessage =
  | ConnectionTypeMessage
  | WebSocketErrorMessage
  | AIResponseMessage;

export enum ConnectionState {
  CONNECTING,
  CONNECTED,
  CONNECTION_TYPE_SET,
  DISCONNECTED,
  ERROR,
}
