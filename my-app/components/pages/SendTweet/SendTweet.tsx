import React, { useState } from 'react';
import IconAddPhoto from '../../Ui/Icon/IconAddPhoto';
import IconExit from '../../Ui/Icon/IconExit';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';
import axios from 'axios';

const SendTweet = () =>
{

  const [ textTweet, setTextTweet ] = useState( '' );
  console.log( textTweet );
  const newTweet = {
    id: Math.floor(Math.random() * 1000),
    "sender": {
      "id": "@arash1350",
      "name": "آرش علوی",
      "image": "/images/users/profile_photo1.jpeg"
    },
    "text": textTweet,
    "like": 78

  };

  const sendTweet = () =>
  {
    if ( !textTweet )
      return alert( "لطفا یک توییت بنویسید" );

    axios.post( "http://localhost:3000/tweets", newTweet )
      .then( res =>
      {
        alert( "توییت با موفقیت انجام شد" );
      } )
      .catch( err =>
      {
        alert( "توییت ارسال نشد." );
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
        <button onClick={sendTweet} className='btn btn-small btn-info-outline mr-2'>Tweet</button>
      </div>

    </div>
  );
};

export default SendTweet;