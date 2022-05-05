import React from 'react';
import IconHashtag from '../../Ui/Icon/IconHashtag';

const HashtagsSidebar = () =>
{
  return (
    <div className='py-4 px-3'>
      <img src="/images/logo-fa.png" width={210} className='block mx-auto mb-4' alt="" />
      <p className='font-bold text-center mb-5'>داغ ترین هشتگ ها</p>

      <ul>
        <li className='flex justify-start py-1 px-2'>
          <IconHashtag width={24} />
          <span className='pr-3'>استقلال</span>
        </li>
        <li className='flex justify-start py-1 px-2'>
          <IconHashtag width={24} />
          <span className='pr-3'>استقلال</span>
        </li>
        <li className='flex justify-start py-1 px-2'>
          <IconHashtag width={24} />
          <span className='pr-3'>استقلال</span>
        </li>
      </ul>
    </div>
  );
};

export default HashtagsSidebar;