import React from 'react';
import IconNotFound from '../Ui/Icon/IconNotFound';

interface INotFoundProps
{
    msg: string | JSX.Element
    size: "small" | "large"
}

const NotFound = (props: INotFoundProps) => {
    return (
        <div className={`border rounded-lg flex flex-col content-center align-middle justify-center px-8 ${props.size == "small" ? "py-28" : `py-48` }`}>
            <div className='flex justify-center'><IconNotFound width={120} /></div>
            <p className='mt-9 text-center'>{props.msg}</p>
        </div>
    );
};

export default NotFound;