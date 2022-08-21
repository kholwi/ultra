import React from 'react';
import SideMenu from '../../components/Menu/SideMenu';
import File01 from "../../components/File01";

function Budget() {
    return (
      <div className="flex w-screen h-screen" >
        <SideMenu />
          <div className="w-screen">
            <File01 />
          </div>
      </div>
    )
}
export default Budget
