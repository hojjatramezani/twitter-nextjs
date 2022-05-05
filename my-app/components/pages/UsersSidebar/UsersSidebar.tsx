import React from 'react';
import IconAddPhoto from '../../Ui/Icon/IconAddPhoto';
import IconExit from '../../Ui/Icon/IconExit';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import IconAvatar from './../../Ui/Icon/IconAvatar';

const UsersSidebar = () =>
{
  return (
    <div className='py-4 px-3'>
      <div className='flex justify-end'>
        <div className='px-3'>
          <p className='ltr'>hojjat ramezani</p>
          <p className='ltr'>@hojjat70</p>
        </div>
        <IconAvatar width={50} />
      </div>
      <div className='flex justify-end pt-3 pb-7'>
        <IconExit width={32} />
        <span className='mr-2'>
          <IconAddPhoto width={32} />
        </span>
      </div>

      <div className='bg-gray-200 rounded-t-2xl overflow-hidden'>
        <p className='text-lg py-3 border-b border-gray-300 px-3'>بهترین خبرنگاران</p>
        <ul>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

          <li className='py-2 px-2 flex justify-start border-b border-gray-300'>
            <IconAvatar width={40}/>
            <div className='px-2 text-sm'>
              <p>رضا غلامی</p>
              <p>@reza_gholami</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default UsersSidebar;