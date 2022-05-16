import axios from "axios";
import { useEffect, useState } from "react";
import SendTweet from "../../components/pages/SendTweet/SendTweet";
import { ITweetProps } from "../../components/pages/Tweet/Tweet";
import TweetList from "../../components/pages/TweetList/TweetList";
import IconHome from "../../components/Ui/Icon/IconHome";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

const dashboard = () =>
{

    const [tweets , setTweets] = useState<ITweetProps[]>([]);

    useEffect(()=> {
        axios.get("http://localhost:3000/tweets")
        .then(res => {

            setTweets(res.data)
            console.log(res.data);
            
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return (
        <LayoutDashboard>

            <div className="px-3 py-3 flex justify-start items-center border-b">
                <IconHome width={26} />
                <p className="px-2">خانه</p>
            </div>

            <SendTweet />

            <TweetList tweets={tweets} />

        </LayoutDashboard>
    );
};

export default dashboard;



