import React from 'react';
// import { Search } from 'react-iconly';
import { ReactComponent as SearchIcon } from '../assets/icon/search.svg';
import logo from '../assets/img/logo.png';

function TopNav() {
  return (
    <div>
      <div className="container mt-6 flex items-center md:mt-0">
        <div
          id="menuBtn"
          className="w-[24px] h-[24px] mr-[24px] flex flex-col justify-around items-center md:hidden"
        >
          <span className="inline-block w-[16px] border-2 border-light rounded"></span>
          <span className="inline-block w-[16px] border-2 border-light rounded"></span>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div
          id="input"
          className="w-[30px] h-[30px] items-center justify-start ml-auto flex gap-[24px] md:ml-[36px] md:w-full md:h-[74px] md:p-[24px]"
        >
          <SearchIcon className="w-full h-full md:w-auto md:h-auto" />
          <input
            type="text"
            placeholder="Search artists"
            className="hidden text-white bg-transparent outline-none border-b border-b-transparent md:inline-block focus:border-b-whiteAlt placeholder:text-whiteAlt"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
