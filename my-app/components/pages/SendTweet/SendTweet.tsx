import React, { useEffect, useState } from 'react';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';
import { newTweetsRequest } from '../../../data/api/api-tweet';
import {useRouter} from 'next/router'



const SendTweet = () =>
{

  const router = useRouter()
  const [ textTweet, setTextTweet ] = useState( '' );
  const [imageTwitter , setImageTwitter] =useState<any>('')
  const newTweet = {"text": textTweet};

  const sendTweetBtn = () =>
  {
    if ( !textTweet )
      return alert( "لطفا یک توییت بنویسید" );
    newTweetsRequest( newTweet, ( isOk: boolean , data: any ) =>
    {
      if ( !isOk )
        return alert( "توییت ارسال نشد!!!" + data );
      alert( "توییت ارسال شد." );
      router.reload();
      
    } );
  };

  useEffect( () =>
  {
    setImageTwitter(localStorage.getItem("imageTwitter"))
  }, [] );

  const showAvatarHandeler = () => {
    if(imageTwitter && imageTwitter !== "undefined")
      return <img  src={imageTwitter} className='block rounded-full object-cover h-12 w-12' />
    if(!imageTwitter || imageTwitter == "undefined" )
      return <IconAvatar width={50} />
}


  return (
    <div className='py-4 px-3 border-b'>

      <div className='flex'>
        <div className="w-auto py-2">
            {showAvatarHandeler()}
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