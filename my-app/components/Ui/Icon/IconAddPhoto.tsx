import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
    onClick?: (arg0?: any) => any
}

const IconAddPhoto = (props: IIcon) =>
{
    return (
        <svg onClick={props.onClick} className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"  id="Layer_2" viewBox="0 0 100.66 100.66"><title/><circle cx="50" cy="55.25" r="9"/><path d="M80.31,31.35H67.76l-.84-4.14A9,9,0,0,0,58.1,20H43.74A9,9,0,0,0,35,26.92l-1.05,4.43H24.49a5.77,5.77,0,0,1,.74,2.07,6,6,0,0,1,0,11.86,6,6,0,0,1-11.85,0,5.64,5.64,0,0,1-2.07-.74V71.35a9,9,0,0,0,9,9h60a9,9,0,0,0,9-9v-31A9,9,0,0,0,80.31,31.35ZM50,70.25a15,15,0,1,1,15-15A15,15,0,0,1,50,70.25Zm29-26H70a3,3,0,0,1,0-6h9a3,3,0,0,1,0,6Z"/><path d="M24.31,36.35h-2v-2a3,3,0,0,0-6,0v2h-2a3,3,0,0,0,0,6h2v2a3,3,0,0,0,6,0v-2h2a3,3,0,0,0,0-6Z"/></svg>
    );
};

export default React.memo(IconAddPhoto);