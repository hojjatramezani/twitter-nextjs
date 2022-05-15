import React from 'react';
import IconAddPhoto from '../../Ui/Icon/IconAddPhoto';
import IconExit from '../../Ui/Icon/IconExit';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';
import IconReply from './../../Ui/Icon/IconReply';
import IconLike from './../../Ui/Icon/IconLike';

const Tweet = () =>
{
  return (
    <div className='py-2 px-3 my-1 border-b'>

      <div className='flex'>
        <div className="w-auto py-1">
          <IconAvatar width={32} />
        </div>
        <div className="grow px-3 py-2">
          <p className='font-iranyekan'>حجت رمضانی</p>
        </div>
      </div>

      <p className='py-3 pr-10 pl-2 mb-3 text-xs'>این یک توییت است</p>

      <div className='flex justify-end py-1'>
        <div>236</div>
        <IconLike width={24} className={"mr-2 cursor-pointer"}  />
        <IconReply width={24} className={"mr-2 cursor-pointer"}  />
      </div>
      
    </div>
  );
};

export default Tweet;