import React from 'react';

const LayoutDashboard = ( props: any ) =>
{
    return (
        <div className="flex flex-row w-full bg-cyan-500 min-h-screen">
            <div className="flex bg-red-500 w-80">1</div>
            <div className='grow '>
                {props.children}
            </div>
            <div className="flex bg-blue-500 w-72">2</div>
        </div>
    );
};

export default LayoutDashboard;