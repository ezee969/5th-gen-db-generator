import React from 'react';
import Image, { StaticImageData } from 'next/image';

const StyledFooterIcon = ({ iconSrc }: { iconSrc: StaticImageData }) => {
  return (
    <a target='_blank' href='https://google.com'>
      <Image
        alt=''
        className='transform transition-all hover:scale-110'
        width={24}
        height={24}
        src={iconSrc}
      />
    </a>
  );
};

export default StyledFooterIcon;
