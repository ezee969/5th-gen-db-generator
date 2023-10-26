import React from 'react';
// Components/Ui
import { unbounded } from '@/fonts';
import facebookIcon from '@/img/facebook-icon.png';
import instagramIcon from '@/img/instagram-icon.png';
import youtubeIcon from '@/img/youtube-icon.png';
import StyledFooterIcon from './styledFooterIcon';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-2 bg-slate-800 py-3 text-xs'>
      <span className={`${unbounded.className} font-extrabold`}>DB Forge</span>
      <span className='mr-2'>dbforge@gmail.com</span>
      <div className='flex gap-2'>
        <StyledFooterIcon iconSrc={facebookIcon} />
        <StyledFooterIcon iconSrc={instagramIcon} />
        <StyledFooterIcon iconSrc={youtubeIcon} />
      </div>
    </footer>
  );
};

export default Footer;
