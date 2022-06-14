import React from 'react';
import HashtagsSidebar from '../../components/pages/HashtagsSidebar/HashtagsSidebar';
import UsersSidebar from '../../components/pages/UsersSidebar/UsersSidebar';


const LayoutDashboard = ( props: any ) =>
{
    
    return (
        <div className="flex flex-row w-full h-screen">
            <div className=" w-72 basis-72 border-l border-sky-300 h-full overflow-y-scroll">
                <HashtagsSidebar />
            </div>
            <div className='flex-1 h-full overflow-y-scroll w-full'>
                {props.children}
            </div>
            <div className=" w-80 basis-80 border-r border-sky-300  h-full overflow-y-scroll">
                <UsersSidebar />
            </div>
        </div>
    );
};

export default LayoutDashboard;