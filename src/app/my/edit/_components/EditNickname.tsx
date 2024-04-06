import { NewNicknameInput } from './NewNicknameInput';
import { EditSection } from './public/EditSection';
const username = 'gildong';
export const EditNickname = () => {
  // selector 로 변경
  return (
    <div className="flex w-full flex-col items-center">
      <EditSection title="변경할 닉네임">
        <NewNicknameInput />
      </EditSection>
      <p>
        현재 닉네임 _ <span className="text-gray-400">{username}</span>
      </p>
    </div>
  );
};
