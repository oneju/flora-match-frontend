import ReviewCard from './MyReviewCard';

const reviews = [
  { s_id: 'flo_store', content: '너무 좋았지모람' },
  { s_id: 'flow_store', content: '으으' },
];

const ReviewList = () => {
  return (
    <div className='w-full h-full'>
      {reviews.map((review, idx) => (
        <ReviewCard key={idx} store={review.s_id} content={review.content} />
      ))}
    </div>
  );
};
export default ReviewList;
