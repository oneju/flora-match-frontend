const ReviewCard = ({ store, content }: { store: string; content: string }) => {
  return (
    <div className='flex p-1 justify-start'>
      <label className='p-3 text-sm font-bold'>REVIEW</label>
      <div>
        <h3 className='text-base'>{content}</h3>
        <p className='text-gray-400'>@{store}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
