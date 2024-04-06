import { DropInput } from './public/DropInput';
import { EditSection } from './public/EditSection';

export const EditAddress = () => {
  return (
    <EditSection title="주소 변경">
      <DropInput category="도" />
      <DropInput category="시" />
    </EditSection>
  );
};
