import Head from 'next/head';
import React from 'react';
import { useEffect, useState } from "react";
import SendTweet from "../../../components/pages/SendTweet/SendTweet";
import { ITweetProps } from "../../../components/pages/Tweet/Tweet";
import IconHome from "../../../components/Ui/Icon/IconHome";
import { setReLoadTweet, setTweetList, useTweetDispatch, useTweetState } from '../../../context/TweetContext';
import { getTweet, getTweetByHashtag } from "../../../data/api/api-tweet";
import LayoutDashboard from "../../../layouts/LayoutDashboard/LayoutDashboard";
import TweetList from '../../../components/pages/TweetList/TweetList';
import { useRouter } from 'next/router';
import { getTweetByUser } from './../../../data/api/api-tweet';
import LoadingElement from '../../../components/Loading/LoadingElement';


const dashboard = () =>
{

    // const [ tweets, setTweets ] = useState<ITweetProps[]>( [] );
    const {tweetList, reLoadTweet} = useTweetState();
    const tweetDispatch = useTweetDispatch();

    const {query} = useRouter()

    const getAllTweetByHashtag = (hashTag: any) => 
    {
        getTweetByHashtag(hashTag , ( isOk: boolean, data: any ) =>
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
        } );
    }

    const getAllTweetByUser = (user: any) => 
    {
        getTweetByUser( user , ( isOk: boolean, data: any ) =>
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
            
        } );
    }

    const getTweetDefault = () => 
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
        } );
    }

    useEffect( () =>
    {
        if(query.hashTag)
        {
            console.log(query.hashTag);
            getAllTweetByHashtag(query.hashTag)
        }
        else if(query.user)
        {
            console.log(query.user);
            getAllTweetByUser(query.user)
        }
        else 
            getTweetDefault()
        
        
    }, [query , reLoadTweet] );

   
    return <LoadingElement msg='لطفا منتظر بمانید.' />

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



