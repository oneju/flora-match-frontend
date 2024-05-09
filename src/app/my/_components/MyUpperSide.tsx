'use client';
import Link from 'next/link';
import MyUserCard from './MyUserCard';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { userState } from '@/recoils/atoms/UserState';

const MyUpperSide = () => {
  const router = useRouter();
  const { uid, username, address, storeInfo } = useRecoilValue(userState);

  if (storeInfo) router.push(`/profile/${uid}`, { scroll: false });

  return (
    <div className="flex w-full p-10">
      <MyUserCard username={username} address={address} />
      <button className="h-10 w-fit flex-initial rounded-lg bg-gray-300 font-semibold text-white hover:bg-gray-500 focus-visible:outline-offset-2">
        <Link className="p-3 text-sm" href="/my/edit">
          내 정보 수정
        </Link>
      </button>
    </div>
  );
};
export default MyUpperSide;
