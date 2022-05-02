import React from 'react';

const Signup = () =>
{
  return (
    <div className='py-4 px-3'>

      <input type="text" className='text-field mb-3' placeholder='Full Name' />
      <input type="text" className='text-field mb-3' placeholder='User Name' />
      <input type="password" className='text-field mb-3' placeholder='Password' />
      <input type="password" className='text-field mb-10' placeholder='Re-password' />

      <button className='btn btn-info w-full '> ثبت نام</button>
    </div>
  );
};

export default Signup;