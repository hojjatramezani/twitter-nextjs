import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home: NextPage = () =>
{


  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col justify-center w-full   h-full bg-slate-100 lg:w-1/2">
        <div className='flex justify-center py-8'>
          <img src='images/t2-logo.png' className='block max-w-max' width={200} />
        </div>
        <div>
          <div className='py-5 flex justify-center'>
            <Link href={'profile/dashboard'}><a href='' className='inline-block'><span className='btn btn-info my-3 inline-block text-sm leading-3  pt-4' >مشاهده پنل کاربری</span></a></Link>
          </div>
          <div className='text-lg py-2 px-4  text-center '>
            React - nextjs - tailwindcss - local json-server
          </div>
        </div>
      </div>

      <div className="flex-col justify-center  h-fullh-full bg-gradient-to-r from-cyan-500 to-blue-500 hidden w-1/2 lg:flex ">
        <div className='flex justify-center py-8'>
          <img src='images/logo.png' className='block max-w-max rounded-full border border-white' width={200} />
        </div>
        <div className='text-6xl py-2 px-1 w-80 mx-auto pl-6 text-left text-white font-bold'>
          See what’s happening
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);


