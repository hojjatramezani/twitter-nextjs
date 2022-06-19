import React, { useContext, useReducer } from 'react';


let TweetStateContext = React.createContext( {} as any );
let TweetDisoatchContext = React.createContext( {} as any );



const TweetReducer = ( state: any, action: any ) =>
{
    switch ( action.type )
    {
        case "SET_TWEET_TEXT":
            return { ...state, textTweet: action.payload };
        case "SET_TWEET_LIST":
            return { ...state, tweetList: action.payload };
        case "SET_LIKE_TWEET":
            const foundIndex = state.tweetList.findIndex((item:any) => item._id == action.payload)
            return { ...state, tweetList: [...state.tweetList.slice(0 , foundIndex)  , {...state.tweetList[foundIndex] , likes: state.tweetList[foundIndex].likes + 1  } ,   ...state.tweetList.slice(foundIndex + 1)  ]}
        default:
            throw new Error( 'Unhandled action type:' );
    }
};


function TweetProvider ( { children }: any )
{

    var [ state, dispatch ] = useReducer( TweetReducer, {
        textTweet: '',
        tweetList: [],
        reLoadTweet: false
    } );

    return (
        <TweetStateContext.Provider value={state}>
            <TweetDisoatchContext.Provider value={dispatch}>

                {children}

            </TweetDisoatchContext.Provider>
        </TweetStateContext.Provider>
    );
}

function useTweetState ()
{
    let context = useContext( TweetStateContext );
    if ( context === undefined )
    {
        throw new Error( "useLayoutDispatch must be used within a LayoutProvider" );
    }
    return context;
}

function useTweetDispatch ()
{
    let context = useContext( TweetDisoatchContext );
    if ( context === undefined )
    {
        throw new Error( "useLayoutDispatch must be used within a LayoutProvider" );
    }
    return context;
}

export { TweetProvider, TweetStateContext, useTweetState, useTweetDispatch, setTweetText, setTweetList, setReLoadTweet, setLikeTweet };



/*********************************************************************************************/

function setTweetText ( dispatch: any, text: string )
{
    dispatch( {
        type: "SET_TWEET_TEXT",
        payload: text
    } );

}

function setTweetList ( dispatch: any, list: any )
{
    dispatch( {
        type: "SET_TWEET_LIST",
        payload: list
    } );

}

function setReLoadTweet ( dispatch: any, prev: boolean )
{
    dispatch( {
        type: "SET_RELOAD_TWEET",
        payload: prev
    } );

}

function setLikeTweet ( dispatch: any, id: string )
{
    dispatch( {
        type: "SET_LIKE_TWEET",
        payload: id
    } );

}