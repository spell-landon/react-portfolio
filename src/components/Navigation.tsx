import React, { Fragment } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const linkClass =
    'text-iconGray text-2xl scale-95 hover:scale-105 hover:text-white transition-all hover:cursor-pointer';
  const navlinks = [
    {
      name: 'Gmail',
      link: '/contact',
      icon: (
        <Fragment>
          <SiGmail className={linkClass} />
        </Fragment>
      ),
    },
    {
      name: 'GitHub',
      link: 'https://github.com/spell-landon',
      icon: (
        <Fragment>
          <FaGithub className={linkClass} />
        </Fragment>
      ),
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/landon-spell/',
      icon: (
        <Fragment>
          <FaLinkedinIn className={linkClass} />
        </Fragment>
      ),
    },
    {
      name: 'Spotify',
      link: 'https://open.spotify.com/artist/5hkHxRCqlwm9L7e3SP58dg?si=FKLHpmfnQauzxOMZYznepw',
      icon: (
        <Fragment>
          <FaSpotify className={linkClass} />
        </Fragment>
      ),
    },
  ];
  return (
    <div className='w-full flex justify-between items-baseline p-8 lg:p-12'>
      <Link
        to='/'
        className='text-lightGray font-semibold text-4xl scale-95 hover:scale-100 transition-all hover:text-white'>
        LS.
      </Link>

      <div className='flex justify-evenly items-center w-fit gap-4'>
        {navlinks.map((item, idx) => {
          return (
            <a key={idx} href={item.link}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
