import Signup from "../components/Authorization/Signup";


const authorization = () =>
{
    return (
        <div className='pt-28 px-6 pb-6 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen'>

            <div className='w-1/4 mx-auto rounded-md bg-slate-50 overflow-hidden'>
                <div className='flex border-b mb-2'>
                    <div className='basis-1/2 py-4 text-center cursor-pointer hover:bg-slate-100'>Login</div>
                    <div className='basis-1/2 py-4 text-center cursor-pointer hover:bg-slate-100 border-l'>Signup</div>
                </div>

                <div>
                    <Signup />
                </div>


            </div>
        </div>
    );
};

export default authorization;
