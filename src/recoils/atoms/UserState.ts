import { StoreInfo, User } from '@/types/User';
import { atom } from 'recoil';

const userState = atom<User>({
  key: 'userState',
  default: {
    // uid: '',
    uid: '123456',
    // username: '',
    username: 'gildong',
    // password: '',
    password: '2',
    // address: '',
    address: '00도 00시', // --- --- 주소 앞 두 단어만
    // contact: '',
    contact: '017-650-6415', // 전화번호
    // reviews: [],
    reviews: [
      {
        storeId: '1313',
        commenterId: '123456',
        comment: '너무 좋아요 (따봉)',
        createdAt: new Date(2023, 1, 2),
      },
    ],
    storeInfo: null, // null || store user 일 경우
    chats: [], // userId list
  },
});

const beforeEditUserState = atom<User>({
  key: 'beforeEditUserState',
  default: {
    uid: '',
    username: '',
    password: '',
    address: '',
    contact: '',
    reviews: [],
    storeInfo: null, // null || store user 일 경우
    chats: [], // userId list
  },
});

const beforeEditStoreState = atom<StoreInfo>({
  key: 'beforeEditStoreState',
  default: {
    name: '',
    image: '',
    address: '',
    discription: '',
    posts: [],
    reviews: [],
  },
});

export { userState, beforeEditUserState, beforeEditStoreState };
