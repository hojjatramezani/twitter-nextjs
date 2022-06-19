import Head from 'next/head';
import React from 'react';
import { useEffect, useState } from "react";
import SendTweet from "../../components/pages/SendTweet/SendTweet";
import { ITweetProps } from "../../components/pages/Tweet/Tweet";
import IconHome from "../../components/Ui/Icon/IconHome";
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { getTweet } from "../../data/api/api-tweet";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";
import TweetList from './../../components/pages/TweetList/TweetList';

const dashboard = () =>
{

    // const [ tweets, setTweets ] = useState<ITweetProps[]>( [] );
    const {tweetList, reLoadTweet} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    useEffect( () =>
    {
        getTweet( ( isOk: boolean, data: any ) =>
        {
            if ( !isOk )
                return alert( "اطلاعات دریافت نشد" + data );
            let newData = data.map( ( item: any ) =>
            {
                const text = item.text;
                const likes = item.likes;
                const imageTweet = item.image;
                const _id = item._id;
                const { name, username , image } = item.user;
                return { _id, name, image, text, likes , username , imageTweet };
            } );
            
            setTweetList(tweetDispatch , newData);
            console.log(tweetList);
            

        } );
    }, [reLoadTweet] );

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport"  />
            </Head>
                <LayoutDashboard>

                    <div className="px-3 py-3 flex justify-start items-center border-b">
                        <IconHome width={26} />
                        <p className="px-2">خانه</p>
                    </div>

                    <SendTweet />

                    <TweetList tweets={tweetList} />

                </LayoutDashboard>
        </>
    );
};

export default React.memo(dashboard);



