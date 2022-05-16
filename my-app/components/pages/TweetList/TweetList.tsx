import React from 'react';
import Tweet, { ITweetProps } from './../Tweet/Tweet';

// export type list = [
//   {
//     id: string;
//     name: string;
//     image: string;
//     text: string;
//     like: string;
//   }
// ];
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