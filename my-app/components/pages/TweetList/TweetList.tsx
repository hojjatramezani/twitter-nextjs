import React from 'react';
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
        props.tweets.length == 0 && <div>qwqwqwqwqw</div>
      }

      {
        props.tweets.map( (item , i) => <Tweet key={i} {...item}/> )
      }

    </div>
  );
};

export default React.memo(TweetList);