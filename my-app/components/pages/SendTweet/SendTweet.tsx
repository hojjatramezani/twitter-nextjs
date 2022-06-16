import React, { useEffect, useRef, useState } from 'react';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconPic from '../../Ui/Icon/IconPic';
import { newTweetsRequest } from '../../../data/api/api-tweet';
import { useRouter } from 'next/router';



const SendTweet = () =>
{


  const inputFile = useRef<any>();
  const [ textTweet, setTextTweet ] = useState( '' );
  const [ imageTwitter, setImageTwitter ] = useState<any>( '' );

  const router = useRouter();
  const [ imageFile, setImageFile ] = useState<any>( '' );
  const [ imagePath, setImagePath ] = useState<any>( '' );
  

  const sendTweetBtn = () =>
  {

      const formData = new FormData()
      formData.append("text" , textTweet );
      if(imageFile)
        formData.append("image" , imageFile );


    if ( !textTweet )
      return alert( "لطفا یک توییت بنویسید" );
    newTweetsRequest( formData, ( isOk: boolean, data: any ) =>
    {
      if ( !isOk )
        return alert( "توییت ارسال نشد!!!" + data );
      alert( "توییت ارسال شد." );
      router.reload();

    } );
  };

  useEffect( () =>
  {
    setImageTwitter( localStorage.getItem( "imageTwitter" ) );
  }, [] );

  const showAvatarHandeler = () =>
  {
    if ( imageTwitter && imageTwitter !== "undefined" )
      return <img src={imageTwitter} className='block rounded-full object-cover h-12 w-12' />;
    if ( !imageTwitter || imageTwitter == "undefined" )
      return <IconAvatar width={50} />;
  };


  const selectImageHandler = ( e: any ) =>
  {
    if ( inputFile.current.files && inputFile.current.files.length > 0 )
    {
      setImageFile( inputFile.current.files[ 0 ] );

      const reader = new FileReader();
      reader.onload = ( e: any ) =>
      {
        setImagePath( e.target.result );
      };
      reader.readAsDataURL( inputFile.current.files[ 0 ] );

    }
  };


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
      {
        imageFile &&
        <img src={imagePath} className="block w-72 overflow-hidden mx-auto rounded-lg border mb-4" />
      }
      <div className='flex justify-end'>
        <span className='cursor-pointer' onClick={() => inputFile.current.click()}>
          <IconPic width={32} />
        </span>
        <input type={"file"} className="hidden" ref={inputFile} onChange={selectImageHandler} />
        <button onClick={sendTweetBtn} className='btn btn-small btn-info-outline mr-2'>Tweet</button>
      </div>

    </div>
  );
};

export default SendTweet;