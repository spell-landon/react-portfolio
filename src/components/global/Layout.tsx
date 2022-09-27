import React, { useState } from 'react';
import { colorSets } from '../../lib/colorSets';

export const Layout = ({
  children,
  colorVariant,
}: {
  children: any;
  colorVariant: any;
}) => {
  const [colors, setcolors] = useState(colorVariant);
  if (!colorVariant) {
    setcolors(colorSets[1]);
  }
  return (
    <div className='w-full h-full max-w-screen lg:max-w-[1800px] min-h-fit lg:max-h-[48rem] flex rounded-2xl relative transition-all p-4'>
      <div
        className={`absolute top-0 left-0 rounded-tl-xl w-1/2 h-1/2 aspect-square bg-gradient-to-br p-[6px] from-[${colors?.first}] via-[${colors?.second}] to-[${colors?.second}]`}></div>

      <div className='w-1/2 h-1/2 aspect-square bg-darkGray absolute top-4 left-4 rounded-lg'></div>

      <div className='z-10 w-full h-full overflow-auto'>{children}</div>

      <div
        className={`absolute bottom-0 right-0 rounded-br-xl w-1/2 h-1/2 aspect-square bg-gradient-to-tl p-[6px] from-[${colors.first}] via-[${colors.second}] to-[${colors.second}]`}></div>

      <div className='w-1/2 h-1/2 aspect-square bg-darkGray absolute bottom-4 right-4 rounded-lg'></div>
    </div>
  );
};
