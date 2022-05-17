import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () =>
{
  return (
    <div className='p-5'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Link href={'profile/dashboard'}><a className='inline-block'><span className='btn btn-small btn-info-outline my-3 inline-block text-sm leading-3  pt-3' >Dashboard</span></a></Link>
      </div>
    </div>
  );
};

export default Home;
