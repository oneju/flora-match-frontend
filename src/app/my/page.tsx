import ReviewList from './_components/ReviewContainer/MyReviewList';
import MyUpperSide from './_components/MyUpperSide';

const u_id = 'aa00000';
export default function My() {
  if (u_id.slice(0, 1) === 'st') {
    // store user
  }
  // 개인 user
  return (
    <div className='flex flex-col p-5 w-full justify-center items-center space-y-3'>
      <MyUpperSide />
      <p className='w-fit'>내가 남긴 후기</p>
      <ReviewList />
      <p className='w-fit text-slate-300'>회원 탈퇴</p>
    </div>
  );
}
