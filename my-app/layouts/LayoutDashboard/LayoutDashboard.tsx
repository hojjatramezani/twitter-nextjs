import React from 'react';
import HashtagsSidebar from '../../components/pages/HashtagsSidebar/HashtagsSidebar';
import UsersSidebar from '../../components/pages/UsersSidebar/UsersSidebar';

const LayoutDashboard = ( props: any ) =>
{
    return (
        <div className="flex flex-row w-full h-screen">
            <div className=" w-72 border-l border-sky-300 h-full overflow-y-scroll">
                <HashtagsSidebar />
            </div>
            <div className='grow h-full overflow-y-scroll'>
                {props.children}
            </div>
            <div className=" border-r border-sky-300 w-72 h-full overflow-y-scroll">
                <UsersSidebar />
            </div>
        </div>
    );
};

export default LayoutDashboard;