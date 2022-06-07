import Router from 'next/router';
import React, { useState } from 'react';
import { signupApi } from '../../data/api/api-auth';

interface Tuser 
{
  name: string;
  username: string;
  password: string;
  rePassword: string | undefined;
}

const Signup = () =>
{
  const [ name, setname ] = useState( '' );
  const [ username, setusername ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ rePassword, setRePassword ] = useState( '' );
  const [ loading, setLoading ] = useState<boolean>( false );

  const user: Tuser = {
    name: name,
    username: username,
    password: password,
    rePassword: rePassword
  };

  const validate = ( user: Tuser ) =>
  {
    if ( !user.name )
      return "لطفا نام و نام خانوادگی خود را کامل وارد کنید";
    if ( !user.username )
      return "نام کاربری نمی تواند خالی باشد";
    if ( !user.password )
      return "رمز عبور نباید خالی باشد";
    if ( !user.rePassword )
      return "لطفا پسورد را دوباره ثبت کنید";
    if ( user.rePassword !== user.password )
      return "رمز عبور در هر دو فیلد باید برابر باشد";
  };

  const signupHandeler = () =>
  {
    const error = validate( user );
    setLoading( true );

    if ( error )
      return alert( error );

    user.rePassword = undefined;
    signupApi( user, ( isOk: boolean, res: any ) =>
    {
      if ( !isOk )
      {
        alert( res );
        return setLoading( false );
      } else
      {
        localStorage.setItem('nameTwitter', res.name);
        localStorage.setItem('usernameTwitter', res.username);
        localStorage.setItem('x-auth-token', res['x-auth-token']);

        alert( "شما وارد حساب کاربری خود شدید." );
        setLoading( false );
        Router.push("/profile/dashboard")
      }

    } );




  };

  return (
    <div className='py-4 px-3'>

      <input value={name} onChange={( e ) => setname( e.target.value )} type="text" className='text-field mb-3' placeholder='Full Name' />
      <input value={username} onChange={( e ) => setusername( e.target.value )} type="text" className='text-field mb-3' placeholder='User Name' />
      <input value={password} onChange={( e ) => setPassword( e.target.value )} type="password" className='text-field mb-3' placeholder='Password' />
      <input value={rePassword} onChange={( e ) => setRePassword( e.target.value )} type="password" className='text-field mb-10' placeholder='Re-password' />

      {loading ? <button className='btn btn-info w-full bg-slate-300 hover:bg-slate-300'>منتظر بمانید</button> : <button onClick={signupHandeler} className='btn btn-info w-full '> ثبت نام</button>}
    </div>
  );
};

export default Signup;