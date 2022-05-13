import { useState } from "react";
import SendTweet from "../../components/pages/SendTweet/SendTweet";
import Tweet from "../../components/pages/Tweet/Tweet";
import TweetList from "../../components/pages/TweetList/TweetList";
import IconHome from "../../components/Ui/Icon/IconHome";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

const dashboard = () =>
{
    return (
        <LayoutDashboard>

            <div className="px-3 py-3 flex justify-start items-center border-b">
                <IconHome width={26} />
                <p className="px-2">خانه</p>
            </div>

            <SendTweet />

            <TweetList />

        </LayoutDashboard>
    );
};

export default dashboard;



