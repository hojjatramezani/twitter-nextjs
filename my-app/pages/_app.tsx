import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import CheckAuth from '../context/CheckAuth';

function MyApp ( { Component, pageProps }: AppProps )
{

  return (
    <div dir='rtl'>
      <CheckAuth>
        <Component {...pageProps} />
      </CheckAuth>
    </div>
  );
}

export default MyApp;
