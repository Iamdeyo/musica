import React, { useRef } from 'react';
import { ReactComponent as HomeIcon } from '../assets/icon/Home-1.svg';
import { ReactComponent as RadioIcon } from '../assets/icon/radio.svg';
import { ReactComponent as LogoutIcon } from '../assets/icon/Logout.svg';
import { ReactComponent as VideosIcon } from '../assets/icon/videos.svg';
import { ReactComponent as PlaylistIcon } from '../assets/icon/playlist.svg';
import { ReactComponent as ProfileIcon } from '../assets/icon/profile.svg';
function SideNav() {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleClick}
      id="sideNav"
      className="absolute transition-all duration-500 -left-full top-0 h-screen w-full max-w-[340px] bg-dark px-[40px] pt-[110px] md:static md:px-0 md:w-auto md:max-w-none md:pt-[20px]"
    >
      <div className="flex items-start flex-col gap-[54px] mb-[54px] md:w-[52px] md:items-center md:bg-darkAlt md:py-[25px] md:rounded-3xl md:gap-[33px] md:mb-[20px]">
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <HomeIcon className="group-hover:text-secondary" />
          <span className="font-bold text-base md:hidden"> Home </span>
        </a>
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <PlaylistIcon className="group-hover:text-secondary" />{' '}
          <span className="font-bold text-base  md:hidden">
            {' '}
            My collections{' '}
          </span>
        </a>
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <RadioIcon className="group-hover:text-secondary" />{' '}
          <span className="font-bold text-base  md:hidden"> Radio </span>
        </a>
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <VideosIcon className="group-hover:text-secondary" />{' '}
          <span className="font-bold text-base  md:hidden"> Music videos </span>
        </a>
      </div>
      <div className="flex items-start flex-col gap-[54px] mb-[54px] md:w-[52px] md:items-center md:bg-darkAlt md:py-[25px] md:rounded-3xl md:gap-[33px] md:mb-[20px]">
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <ProfileIcon className="group-hover:text-secondary" />{' '}
          <span className="font-bold text-base md:hidden"> Profile </span>
        </a>
        <a
          href="/#"
          className="group flex items-center gap-[30px] text-lightAlt hover:text-white"
        >
          <LogoutIcon className="group-hover:text-secondary" />{' '}
          <span className="font-bold text-base  md:hidden"> Log out </span>
        </a>
      </div>
    </div>
  );
}

export default SideNav;
