import React from 'react';
// Components/ui
import './styles.css';
import Image from 'next/image';
import EnanoImage from '@/assets/enano.png';

export default function LoadingEnano() {
  return (
    <div className='loading-container'>
      <Image
        src={EnanoImage}
        alt='Enano girando en círculos'
        width={50}
        height={50}
        className='loading-spinner'
      />
    </div>
  );
}
