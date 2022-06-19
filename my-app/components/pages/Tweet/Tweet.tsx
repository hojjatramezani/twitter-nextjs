import React from 'react';
import { setLikeTweet, setReLoadTweet, setTweetText, useTweetDispatch, useTweetState } from '../../../context/TweetContext';
import { likeTweet } from '../../../data/api/api-tweet';
import IconAvatar from '../../Ui/Icon/IconAvatar';
import IconReplay from '../../Ui/Icon/IconReplay';
import IconLike from './../../Ui/Icon/IconLike';

export interface ITweetProps{
  _id: string
  name: string
  username: string
  image: string
  imageTweet: string
  text: string
  likes: string
}

const Tweet = (props: ITweetProps) =>
{

  const {reLoadTweet , tweetList} = useTweetState();
  const tweetDispatch = useTweetDispatch();

  const rePlayHandler = () => {
    setTweetText(tweetDispatch , props.text);

    var myDiv = document.getElementById('containerDiv');
    myDiv!.scrollTop = 0;
    myDiv!.style.scrollBehavior = "smooth";

  }

  const likeTweetHandler = () => {
    likeTweet(props._id , ( isOk: boolean, data: any ) => {
      if ( !isOk )
        return alert( "توییت ارسال نشد!!!" + data );          
      alert( "توییت لایک شد." );
      setLikeTweet(tweetDispatch , props._id)
    })
  }

  return (
    <div className='py-2 px-3 my-1 border-b'>

      <div className='flex'>
        <div className="w-auto py-1">
          {
            props.image ? <img  src={props.image} className='block rounded-full object-cover h-12 w-12 border' />: <IconAvatar width={42} />
          }
        </div>
        <div className="grow px-3 py-2">
          <p className='font-iranyekan'>{props.name}</p>
          <p className='font-iranyekan'>{props.username}</p>
        </div>
      </div>

      {
        props.imageTweet &&
        <img src={ props.imageTweet} className="block w-72 overflow-hidden mx-auto rounded-lg border mb-4" />
      }
      <p className='flex py-3 pr-10 pl-2 mb-3 text-xs leading-7 break-words w-full'>{props.text}</p>

      <div className='flex justify-end py-1'>
        <div>{props.likes}</div>
        <IconLike onClick={likeTweetHandler} width={24} className={"mr-2 cursor-pointer"}  />
        <IconReplay onClick={rePlayHandler} width={24} className={"mr-2 cursor-pointer"}  />
      </div>
      
    </div>
  );
};

export default React.memo(Tweet);