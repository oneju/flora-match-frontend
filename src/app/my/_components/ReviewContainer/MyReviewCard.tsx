const ReviewCard = ({ store, content }: { store: string; content: string }) => {
  return (
    <div className="flex justify-start p-1 px-1 py-3">
      <label className="p-3 text-sm font-bold">REVIEW</label>
      <div>
        <h3 className="text-base">{content}</h3>
        <p className="text-gray-400">@{store}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
