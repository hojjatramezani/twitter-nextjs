import React from 'react';
import IconAddPhoto from '../../Ui/Icon/IconAddPhoto';
import IconExit from '../../Ui/Icon/IconExit';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';

const SendTweet = () =>
{
  return (
    <div className='py-4 px-3 border-b'>

      <div className='flex'>
        <div className="w-auto py-2">
          <IconAvatar width={32} />
        </div>
        <div className="grow px-3 py-2">
          <textarea className='w-full outline-none' placeholder='توییت خود را بنویسید ... ' ></textarea>
        </div>
      </div>

      <div className='flex justify-end'>
        <span className='cursor-pointer'>
          <IconPic width={32} />
        </span>
        <button  className='btn btn-small btn-info-outline mr-2'>Tweet</button>
      </div>
      
    </div>
  );
};

export default SendTweet;