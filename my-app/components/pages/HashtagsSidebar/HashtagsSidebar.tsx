import React from 'react';

const HashtagsSidebar = () =>
{
  return (
    <div className='py-4 px-3'>

      <input type="text" className='text-field mb-3' placeholder='User Name' />
      <input type="password" className='text-field mb-10 ' placeholder='Password' />

      <button className='btn btn-info w-full'>ورود به سایت</button>
    </div>
  );
};

export default HashtagsSidebar;