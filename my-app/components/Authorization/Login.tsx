import React, { useState } from 'react';
import { loginApi } from '../../data/api/api-auth';

const Login = () =>
{

  const [ username, setUserName ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ loading, setLoading ] = useState( false );


  const data = {
    username: username,
    password: password
  };

  const validate = ( data: any ) =>
  {
    if ( !data.username )
      return "نام کاربری نباید خالی باشد";
    if ( !data.password )
      return "رمز عبور نباید خالی باشد";
  };

  const loginHandeler = () =>
  {
    const error = validate( data );
    setLoading( true );

    if ( error )
      return alert( error );

    loginApi( data, ( isOk: boolean, res: any ) =>
    {
      if ( !isOk )
      {
        alert( res );
        return setLoading( false );
      } else
      {
        alert( "شما وارد حساب کاربری خود شدید." );
        setLoading( false );
      }




    } );


  };

  return (
    <div className='py-4 px-3'>

      <input value={username} onChange={e => setUserName( e.target.value )} type="text" className='text-field mb-3' placeholder='User Name' />
      <input value={password} onChange={e => setPassword( e.target.value )} type="password" className='text-field mb-10' placeholder='Password' />

      {
        loading ? <button className='btn btn-info w-full bg-slate-300 hover:bg-slate-300'>منتظر بمانید</button> : <button onClick={loginHandeler} className='btn btn-info w-full'>ورود به سایت</button>
      }

    </div>
  );
};

export default Login;