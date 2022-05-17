import React from 'react';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const HashtagsSidebar = () =>
{

  const [ hashtags, setHashtags ] = useState( [] );

  useEffect( () =>
  {
    axios.get( "http://localhost:3000/hashtags" )
      .then( res =>
      {
        setHashtags( res.data );
      } )
      .catch( err =>
      {
        console.log( err );
      } );
  } , [] );

  return (
    <div className='py-4 px-3'>
      <img src="/images/logo-fa.png" width={210} className='block mx-auto mb-4' alt="" />
      <p className='font-bold text-center mb-5'>داغ ترین هشتگ ها</p>

      <ul>
        {
          hashtags.map( (item , i) =>
          {
            return (
              <li key={i} className='flex justify-start py-1 px-2 cursor-pointer hover:bg-slate-50'>
                <IconHashtag width={24} />
                <span className='pr-3'>{item}</span>
              </li>
            );
          } )
        }
      </ul>
    </div>
  );
};

export default HashtagsSidebar;