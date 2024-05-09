export interface Post {
  pid: string;
  registerId: string;
  img: string;
  content: string;
  tag: string[];
  createdAt: Date;
  likes: number;
  reply: Reply[];
}

export interface Reply {
  commenterId: string;
  comment: string;
}
