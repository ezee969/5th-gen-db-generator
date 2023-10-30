import React from 'react';
// Components/ui
import sequelizeIcon from '@/img/sequelizejs-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const ModelItem = ({ model }: { model: Model }) => {
  return (
    <li className='rounded bg-gray-800 p-2 text-slate-100 transition-all hover:bg-gray-700'>
      <Link
        className='flex items-center gap-4  '
        href={`/dashboard/models/${model.id}`}
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
