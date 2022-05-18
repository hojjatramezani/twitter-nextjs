import React, { useState } from 'react';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';
import { newTweetsRequest } from '../../../data/api/api-tweet';
import {useRouter} from 'next/router'



const SendTweet = () =>
{

  const router = useRouter()
  const [ textTweet, setTextTweet ] = useState( '' );
  const newTweet = {
    id: Math.floor( Math.random() * 1000 ),
    "sender": {
      "id": "@vahid",
      "name": "وحید احمدی",
      "image": "/images/users/03.png"
    },
    "text": textTweet,
    "like": 78

  };

  const sendTweetBtn = () =>
  {
    if ( !textTweet )
      return alert( "لطفا یک توییت بنویسید" );
    newTweetsRequest( newTweet, ( isOk: boolean ) =>
    {
      if ( !isOk )
        return alert( "توییت ارسال نشد!!!" );
      alert( "توییت ارسال شد." );
      router.reload();
      
    } );
  };


  return (
    <div className='py-4 px-3 border-b'>

      <div className='flex'>
        <div className="w-auto py-2">
          <IconAvatar width={32} />
        </div>
        <div className="grow px-3 py-2">
          <textarea className='w-full outline-none' value={textTweet} onChange={e => setTextTweet( e.target.value )} placeholder='توییت خود را بنویسید ... ' ></textarea>
        </div>
      </div>

      <div className='flex justify-end'>
        <span className='cursor-pointer'>
          <IconPic width={32} />
        </span>
        <button onClick={sendTweetBtn} className='btn btn-small btn-info-outline mr-2'>Tweet</button>
      </div>

    </div>
  );
};

export default SendTweet;