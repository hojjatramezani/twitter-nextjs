import React from 'react';
import HashtagsSidebar from '../../components/pages/HashtagsSidebar/HashtagsSidebar';

const LayoutDashboard = ( props: any ) =>
{
    return (
        <div className="flex flex-row w-full h-screen">
            <div className="flex w-72 border-l border-sky-300">
                <HashtagsSidebar />
            </div>
            <div className='grow '>
                {props.children}
            </div>
            <div className="flex border-r border-sky-300 w-72">2</div>
        </div>
    );
};

export default LayoutDashboard;