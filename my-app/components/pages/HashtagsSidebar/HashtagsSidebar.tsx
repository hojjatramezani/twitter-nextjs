import React from 'react';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { getHashtags } from './../../../data/api/api-tweet';
import Link from 'next/link';

const HashtagsSidebar = () =>
{

  const [ hashtags, setHashtags ] = useState<any>( [] );

  useEffect( () =>
  {
    getHashtags( ( isOk: boolean, data: any ) =>
    {
      if ( !isOk )
        return alert( "لیست هشتگ ها دریافت نشد." );
      setHashtags( data );
    } );
  }, [] );

  return (
    <div className='py-4 px-3'>
      <Link href={'/profile/dashboard'}>
        <a>
          <img src="/images/logo-fa.png" width={210} className='block mx-auto mb-4' alt="" />
        </a>
      </Link>
      <p className='font-bold text-center mb-5'>داغ ترین هشتگ ها</p>

      <ul>
        {
          hashtags.map( ( item: any, i: number ) =>
          {
            return (
              <Link key={i}
                href={{
                  pathname: '/profile/dashboard',
                  query: { hashTag: item.text }
                }}
              >
                <a>
                  <li className='flex justify-start py-1 px-2 cursor-pointer hover:bg-slate-50'>
                    <IconHashtag width={24} />
                    <span className='pr-3'>{item.text}</span>
                  </li>
                </a>
              </Link>
            );
          } )
        }
      </ul>
    </div>
  );
};

export default React.memo( HashtagsSidebar );