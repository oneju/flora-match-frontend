export interface ChatRoom {
  cid: string;
  storeId: string;
  userId: string;
  chat: Chat[];
}

export interface Chat {
  senderId: string;
  content: string;
  createdAt: Date;
}
