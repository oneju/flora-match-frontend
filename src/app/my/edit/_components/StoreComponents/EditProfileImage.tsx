import Image from 'next/image';
import React from 'react';

export const EditProfileImage = () => {
  return (
    <div className="flex h-fit w-fit items-center">
      <label
        className="absolute mt-16 cursor-pointer rounded-b-full bg-neutral-700 px-12 pb-12 pt-3 font-bold text-white"
        htmlFor="profile_pic"
      >
        사진 선택
      </label>
      <input type="file" id="profile_pic" name="profile_pic" accept="image/png, image/jpeg" />
      <Image src="/userDefaultImage.png" alt="profile_img" width={150} height={150} />
    </div>
  );
};
