export interface SuccessfulAuth {
  jwt: string;
}

export interface UserInfo {
  id: number;
  documentId: string;
  username: string;
  email: string;
}
