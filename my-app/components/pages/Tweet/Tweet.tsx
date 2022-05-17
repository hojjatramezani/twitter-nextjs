import React from 'react';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconReply from './../../Ui/Icon/IconReply';
import IconLike from './../../Ui/Icon/IconLike';

export interface ITweetProps{
  id: string
  name: string
  image: string
  text: string
  like: string
}

const Tweet = (props: ITweetProps) =>
{
  
  return (
    <div className='py-2 px-3 my-1 border-b'>

      <div className='flex'>
        <div className="w-auto py-1">
          {
            props.image ? <img src={props.image} width="42" className='rounded-full object-cover' /> : <IconAvatar width={42} />
          }
        </div>
        <div className="grow px-3 py-2">
          <p className='font-iranyekan'>{props.name}</p>
        </div>
      </div>

      <p className='flex py-3 pr-10 pl-2 mb-3 text-xs leading-7 break-words w-full'>{props.text}</p>

      <div className='flex justify-end py-1'>
        <div>{props.like}</div>
        <IconLike width={24} className={"mr-2 cursor-pointer"}  />
        <IconReply width={24} className={"mr-2 cursor-pointer"}  />
      </div>
      
    </div>
  );
};

export default Tweet;