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
        props.tweets.map( item => <Tweet {...item}/> )
      }

    </div>
  );
};

export default TweetList;