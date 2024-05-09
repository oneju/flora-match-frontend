'use client';
import { useRecoilValue } from 'recoil';
import ReviewCard from './MyReviewCard';
import { userState } from '@/recoils/atoms/UserState';

const ReviewList = () => {
  const { reviews } = useRecoilValue(userState);

  return (
    <div className="h-full w-full">
      {reviews.length > 0 ? (
        reviews.map((review, idx) => (
          <ReviewCard key={idx} store={review.storeId} content={review.comment} />
        ))
      ) : (
        <p className="text-center">아직 작성한 리뷰가 없습니다</p>
      )}
    </div>
  );
};
export default ReviewList;
