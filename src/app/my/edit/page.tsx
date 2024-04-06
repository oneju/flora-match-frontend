import Link from 'next/link';
import { EditNickname } from './_components/EditNickname';
import { EditAddress } from './_components/EditAddress';
import { EditProfileImage } from './_components/StoreComponents/EditProfileImage';
import { EditDiscription } from './_components/StoreComponents/EditDiscription';
import { EditStorelocation } from './_components/StoreComponents/EditStorelocation';
const isStore = false;
export default function Edit() {
  // 개인 user
  // store user

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Edit page</h1>
      <div className="flex h-full w-screen flex-col items-center">
        {isStore && <EditProfileImage />}
        <EditNickname />
        {isStore && <EditDiscription />}
        {isStore ? <EditStorelocation /> : <EditAddress />}
      </div>
      <button className="m-3 rounded-lg bg-gray-300 px-10 py-3 hover:bg-gray-400">완료</button>
      <Link href="/my">마이페이지로 이동</Link>
    </div>
  );
}
