import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

function MyApp ( { Component, pageProps }: AppProps )
{
  
  return (
    <div dir='rtl'>
    
        <Component {...pageProps} />
    
    </div>
  );
}

export default MyApp;
