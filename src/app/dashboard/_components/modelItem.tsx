import React from 'react';
// Components/ui
import sequelizeIcon from '@/img/sequelizejs-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const ModelItem = ({ model }: { model: any }) => {
  return (
    <li>
      <Link
        className='flex items-center gap-4 text-white transition-all hover:scale-105 hover:transform'
        href={`/dashboard/${model.id}`}
      >
        <Image
          src={sequelizeIcon}
          width={24}
          height={24}
          alt='Sequelize Icon'
        />
        <span>{model.modelName}</span>
      </Link>
    </li>
  );
};

export default ModelItem;
