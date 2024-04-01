interface User {
  username: string;
  address: string;
}
const MyUserCard = ({ username, address }: User) => {
  return (
    <div className='flex-auto'>
      <p className='text-base font-semibold'>{username}</p>
      <p className='text-sm py-1'>{address}</p>
    </div>
  );
};
export default MyUserCard;
