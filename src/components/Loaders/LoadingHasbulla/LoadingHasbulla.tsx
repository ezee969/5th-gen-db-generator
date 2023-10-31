import React from 'react';
// Components/ui
import './styles.css';
import Image from 'next/image';
import HasbullaImage from '@/assets/hasbullah_200.png';

export default function LoadingHasbulla() {
  return (
    <div className='loading-container'>
      <Image
        src={HasbullaImage}
        alt='Hasbulla'
        width={300}
        height={300}
        className='loading-spinner'
      />
    </div>
  );
}
