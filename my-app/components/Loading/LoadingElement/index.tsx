import React from 'react';
import IconLoadingCircle from '../../Ui/Icon/IconLoadingCircle';

interface ILoadingElementProps
{
    msg: string
}

const LoadingElement = (props: ILoadingElementProps) => {
    return (
        <div className='flex flex-col align-middle justify-center w-screen h-screen p-4'>
            <div className='flex justify-center'>
                <IconLoadingCircle width={80} />
            </div>
            <p className='text-center mt-9'>{props.msg}</p>
        </div>
    );
};

export default LoadingElement;