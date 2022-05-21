import Head from 'next/head';
import { useEffect, useState } from "react";
import SendTweet from "../../components/pages/SendTweet/SendTweet";
import { ITweetProps } from "../../components/pages/Tweet/Tweet";
import TweetList from "../../components/pages/TweetList/TweetList";
import IconHome from "../../components/Ui/Icon/IconHome";
import { getTweet } from "../../data/api/api-tweet";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

const dashboard = () =>
{

    const [ tweets, setTweets ] = useState<ITweetProps[]>( [] );

    useEffect( () =>
    {
        getTweet( ( isOk: boolean, data: any ) =>
        {
            if ( !isOk )
                return alert( "اطلاعات دریافت نشد" );
            data = data.map( ( item: any ) =>
            {
                const text = item.text;
                const like = item.like;
                const { id, name, image } = item.sender;
                return { id, name, image, text, like };
            } );
            setTweets( data );

        } );
    }, [] );

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

                    <TweetList tweets={tweets} />

                </LayoutDashboard>
        </>
    );
};

export default dashboard;



