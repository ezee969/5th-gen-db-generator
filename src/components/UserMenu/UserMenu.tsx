/* eslint-disable @next/next/no-img-element */
import React from 'react';
// Components/ui
import './style.css';
import Link from 'next/link';
import avatarImg from '@/img/avatar.png';
import Image from 'next/image';

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

const UserMenu = ({ user }: Props) => {
  return (
    <div className='dropdown'>
      <button className='dropdown-toggle'>
        <Image
          width={36}
          height={36}
          src={user?.image ? user.image : avatarImg}
          alt='User Avatar'
          className='big-avatar'
        />
      </button>
      <div className='dropdown-menu'>
        <div className='user-card'>
          <Image
            src={user?.image ? user.image : avatarImg}
            width={64}
            height={64}
            alt='User Avatar'
            className='small-avatar'
          />
          <div className='user-info'>
            <span className='name'>{user?.name ? user.name : 'John Doe'}</span>
            <span className='email'>
              {user?.name ? user.email : 'johndoe@example.com'}
            </span>
          </div>
        </div>
        <Link
          href='/api/auth/signout?callbackUrl=/'
          className='sign-out-button'
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
