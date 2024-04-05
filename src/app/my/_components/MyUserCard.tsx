import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/pro-solid-svg-icons';
interface User {
  username: string;
  address: string;
}
const MyUserCard = ({ username, address }: User) => {
  return (
    <div className="flex-auto">
      <p className="text-base font-semibold">{username}</p>
      <p className="py-1 text-sm">
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp; {address}
      </p>
    </div>
  );
};
export default MyUserCard;
