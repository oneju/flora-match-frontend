import { ChatRoom } from './Chat';
import { Post } from './Post';

export interface User {
  uid: string;
  username: string;
  password: string;
  address: string;
  contact: string;
  storeInfo: StoreInfo | null;
  chats: ChatRoom[];
  reviews: Review[];
}

export interface StoreInfo {
  name: string | undefined;
  image: string | undefined;
  address: string | undefined;
  discription: string | undefined;
  posts?: Post[];
  reviews?: Review[];
}

export interface Review {
  storeId: string;
  commenterId: string;
  comment: string;
  createdAt: Date;
}
