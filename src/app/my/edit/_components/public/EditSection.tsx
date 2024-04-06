import React from 'react';

export const EditSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full items-center">
      <div className="flex w-full px-8 py-2">
        <label className="w-3/12 items-center py-3 text-lg font-bold">{title}</label>
        {children}
      </div>
    </div>
  );
};
