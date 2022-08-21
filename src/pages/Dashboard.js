import React from 'react';
import SideMenu from '../components/Menu/SideMenu';
import Container from '../components/Menu/Container';

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen" >
      <SideMenu />
      <div className="w-screen">
        <Container />
      </div>
    </div>
  )
}

export default Dashboard
