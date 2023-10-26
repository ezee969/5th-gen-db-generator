import React, { ReactNode } from 'react';
// Components/ui
import Link from 'next/link';

type HeaderLinkProps = {
  href: string;
  children: ReactNode;
};

const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className=' transition duration-300 ease-in-out hover:text-gray-300'
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
