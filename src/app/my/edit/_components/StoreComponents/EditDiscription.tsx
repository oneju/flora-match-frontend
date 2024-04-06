import React from 'react';
import { EditSection } from '../public/EditSection';

export const EditDiscription = () => {
  return (
    <EditSection title="소개글 작성">
      <textarea className="m-2 h-24 w-2/3 rounded-md border border-gray-300 px-3 py-2" />
    </EditSection>
  );
};
