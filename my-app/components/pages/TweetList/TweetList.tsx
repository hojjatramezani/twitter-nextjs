import React from 'react';
import NotFound from '../../NotFound';
import Tweet, { ITweetProps } from './../Tweet/Tweet';

interface ITweetListProps
{
  tweets: ITweetProps[];
}

const TweetList = ( props: ITweetListProps ) =>
{
  return (
    <div>
      {
        props.tweets.length == 0 && <div className='p-2'><NotFound size='small' msg={"این کاربر هیچ گونه تویتتی ثبت نکرده اند"} /></div>
      }

      {
        props.tweets.map( (item , i) => <Tweet key={i} {...item}/> )
      }

    </div>
  );
};

export default React.memo(TweetList);