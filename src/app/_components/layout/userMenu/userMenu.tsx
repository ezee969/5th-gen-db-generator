/* eslint-disable @next/next/no-img-element */
import React from 'react';
// Components/ui
import styles from './userMenu.module.css';
import Link from 'next/link';
import avatarImg from '@/assets/avatar.png';
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
    <div className={styles['dropdown']}>
      <button className={styles['dropdown-toggle']}>
        <Image
          width={36}
          height={36}
          src={user?.image ? user.image : avatarImg}
          alt='User Avatar'
          className={styles['big-avatar']}
        />
      </button>
      <div className={styles['dropdown-menu']}>
        <div className={styles['user-card']}>
          <Image
            src={user?.image ? user.image : avatarImg}
            width={64}
            height={64}
            alt='User Avatar'
            className={styles['small-avatar']}
          />
          <div className={styles['user-info']}>
            <span className={styles['name']}>
              {user?.name ? user.name : 'John Doe'}
            </span>
            <span className={styles['email']}>
              {user?.name ? user.email : 'johndoe@example.com'}
            </span>
          </div>
        </div>
        <Link
          href='/api/auth/signout?callbackUrl=/'
          className={styles['sign-out-button']}
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
