import Link from 'next/link';
import MyUserCard from './MyUserCard';
const username = 'gildong';
const area = '00시 00동';
const MyUpperSide = () => {
  return (
    <div className="flex w-full p-10">
      <MyUserCard username={username} address={area} />
      <button className="h-10 w-fit flex-initial rounded-lg bg-gray-300 font-semibold text-white hover:bg-gray-500 focus-visible:outline-offset-2">
        <Link className="p-3 text-sm" href="/my/edit">
          내 정보 수정
        </Link>
      </button>
    </div>
  );
};
export default MyUpperSide;
