import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import { TweetProvider } from '../context/TweetContext';
import React from 'react';

function MyApp ( { Component, pageProps }: AppProps )
{
  
  return (
    <div dir='rtl'>
      <TweetProvider>
        <Component {...pageProps} />
      </TweetProvider>
    </div>
  );
}

export default React.memo(MyApp);
