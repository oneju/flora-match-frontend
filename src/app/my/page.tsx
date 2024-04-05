import ReviewList from './_components/ReviewContainer/MyReviewList';
import MyUpperSide from './_components/MyUpperSide';

export default function My() {
  // store user -> store/[:id]
  // 개인 user
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-3 p-5">
      <MyUpperSide />
      <p className="w-fit">내가 남긴 후기</p>
      <ReviewList />
      <p className="w-fit text-slate-300">회원 탈퇴</p>
    </div>
  );
}
