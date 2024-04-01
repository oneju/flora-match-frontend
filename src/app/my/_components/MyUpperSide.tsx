import Link from 'next/link';
import MyUserCard from './MyUserCard';

const MyUpperSide = () => {
  return (
    <div className='flex p-10 w-full'>
      <MyUserCard username='gildong' address='00구 00동' />
      <button className='flex-initial w-fit h-10 rounded-lg bg-blue-500 font-semibold text-white hover:bg-blue-800 focus-visible:outline-offset-2'>
        <Link className='p-3 text-sm' href='/my/edit'>
          내 정보 수정
        </Link>
      </button>
    </div>
  );
};
export default MyUpperSide;
