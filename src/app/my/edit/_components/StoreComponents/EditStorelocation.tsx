'use client';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { InputTitle } from '../public/InputTitle';
import { useState } from 'react';
import { EditSection } from '../public/EditSection';

export const EditStorelocation = () => {
  const [isModal, setIsModal] = useState(false);
  const [storeAddr, setStoreAddr] = useState('00도 00시');
  // 도로명 주소 api
  const searchAddr = (data: Address) => {
    setStoreAddr(data.roadAddress);
  };
  return (
    <div className="w-full">
      <EditSection title="가게 위치 입력">
        <div className="m-2 flex w-2/3 justify-between p-0">
          <label className="mr-2 h-fit w-full rounded-md border border-gray-200 px-3 py-2 text-center text-gray-300">
            {storeAddr}
          </label>
          <button
            className="w-16 rounded-lg bg-gray-500 text-[#eee]"
            onClick={() => setIsModal(!isModal)}
          >
            검색
          </button>
        </div>
      </EditSection>
      {isModal && <DaumPostcodeEmbed onComplete={searchAddr} />}
    </div>
  );
};
