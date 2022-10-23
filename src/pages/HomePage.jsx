import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';

function HomePage() {
  return (
    <div className="bg-dark h-screen">
      <TopNav />
      <SideNav />
    </div>
  );
}

export default HomePage;
