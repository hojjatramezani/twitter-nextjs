import { useState } from "react";
import Login from "../components/Authorization/Login";
import Signup from "../components/Authorization/Signup";


const authorization = () =>
{
    const [ tab, setTab ] = useState<'login' | 'signup'>( 'login' );

    return (
        <div className={style.root}>

            <img width={100} className="block mx-auto" src="images/logo.png" alt="" />
            <p className="text-center text-2xl mb-12 font-bold text-white">به توییتر خوش آمدید</p>

            <div className='w-1/4 mx-auto rounded-md bg-slate-50 overflow-hidden'>
                <div className='flex border-b mb-2 select-none'>
                    <div onClick={() => setTab( 'login' )} className={`basis-1/2 py-4 text-center cursor-pointer ${tab=== 'login' && 'bg-slate-200'} `}>ورود</div>
                    <div onClick={() => setTab( 'signup' )} className={`basis-1/2 py-4 text-center cursor-pointer border-l ${tab=== 'signup' && 'bg-slate-200'}`}>ثبت نام</div>
                </div>

                <div>
                    {tab === 'login' && <Login />}
                    {tab === 'signup' && <Signup />}
                </div>
            </div>

        </div>
    );
};

export default authorization;



const style = {
    root: 'pt-28 px-6 pb-6 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen',
}
