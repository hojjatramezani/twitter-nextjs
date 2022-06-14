import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { getUsers } from '../../../data/api/api-tweet';
import IconAddPhoto from '../../Ui/Icon/IconAddPhoto';
import IconExit from '../../Ui/Icon/IconExit';
import IconHashtag from '../../Ui/Icon/IconHashtag';
import IconAvatar from './../../Ui/Icon/IconAvatar';
import Router from 'next/router';
import { COOKIE_NAME_PRERENDER_DATA } from 'next/dist/server/api-utils';
import { readFile } from 'fs/promises';
import { uploadUserPhoto } from '../../../data/api/api-auth';




interface IUser
{
  id: string;
  name: string;
  image: string;
}

const UsersSidebar = (props: any) =>
{

  const [ users, setUsers ] = useState<IUser[]>( [] );
  const [nameTwitter , setNameTwitter] =useState<string | null>('')
  const [usernameTwitter , setUsernameTwitter] =useState<any>('')
  const [imageTwitter , setImageTwitter] =useState<any>('')

  const [imageFile , setImageFile] =useState<any>('')
  const [imagePath , setImagePath] =useState<any>('')
  const inputFileRef = useRef<any>()

  useEffect( () =>
  {

    setNameTwitter(localStorage.getItem("nameTwitter"))
    setUsernameTwitter(localStorage.getItem("usernameTwitter"))
    setImageTwitter(localStorage.getItem("imageTwitter"))

    console.log(imageTwitter);
    

    getUsers( ( isOk: boolean, data: any ) =>
    {
      if ( !isOk )
        return alert( "لیست کاربران دریافت نشد." );
      setUsers( data );
    } );


  }, [] );

  const exitHandeler = () => {
    localStorage.removeItem("nameTwitter");
    localStorage.removeItem("usernameTwitter");
    localStorage.removeItem("imageTwitter");
    localStorage.removeItem("x-auth-token");
    sessionStorage.setItem("hellooooooo" , "10")
    Router.push("/authorization")
  }

  const showAvatarHandeler = () => {
      if(imagePath)
        return <img width={50} src={imagePath} className='rounded-full object-cover' />
      if(imageTwitter && imageTwitter !== "undefined")
        return <img width={50} src={imageTwitter} className='rounded-full object-cover' />
      if(!imageTwitter || imageTwitter == "undefined" )
        return <IconAvatar width={50} />
  }
 
  const avatarHandeler = (e: any) => {
    if(e.target.files && e.target.files.length > 0)
    {
      setImageFile(e.target.files[0])

      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImagePath(e.target.result)
      };
      reader.readAsDataURL(e.target.files[0])

      const formDate = new FormData();
      formDate.append("image" , e.target.files[0] )

      uploadUserPhoto(formDate , (isOk:boolean , data:any) => {
          if(!isOk)
              return alert("تصویر به درستی آپلود نشد.")
          alert("تصویر به درستی آپلود شد.")
          localStorage.setItem("imageTwitter" , data.imagePath)
          
      })
    }
  }

  return (
    <div className='py-4 px-3'>
      <div className='flex justify-end'>
        <div className='px-3'>
          <p className='ltr'>{nameTwitter}</p>
          <p className='ltr'>{'@'+usernameTwitter}</p>
        </div>
        {showAvatarHandeler()}
        
      </div>
      <div className='flex justify-end pt-3 pb-7'>
        <IconExit onClick={exitHandeler} className="cursor-pointer" width={32} />
        <span className='mr-2'>
          <IconAddPhoto onClick={() => inputFileRef.current.click()} className="cursor-pointer" width={32} />
          <input type={'file'} className="hidden" ref={inputFileRef} onChange= {avatarHandeler} />
        </span>
      </div>
      

      <div className='bg-gray-200 rounded-t-2xl overflow-hidden'>
        <p className='text-lg py-3 border-b border-gray-300 px-3'>بهترین خبرنگاران</p>
        <ul>
          {
            users.map( ( item, i ) =>
            {
              return (
                <li key={i} className='py-2 px-2 flex justify-start border-b border-gray-300'>
                  {item.image ? <img src={item.image} className="rounded-full" width={40} /> : <IconAvatar width={40} />}

                  <div className='px-2 text-sm'>
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                  </div>
                </li>
              );
            } )
          }

        </ul>
      </div>
    </div>
  );
};

export default UsersSidebar;