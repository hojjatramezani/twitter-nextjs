import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
}


const IconReply = (props: IIcon) =>
{
    return (
        <svg className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M5.41421356,10 L11,10 C18.8689424,10 22,13.2562999 22,21 L20,21 C20,14.3437001 17.7464422,12 11,12 L5.41421356,12 L9.70710678,16.2928932 L8.29289322,17.7071068 L1.58578644,11 L8.29289322,4.29289322 L9.70710678,5.70710678 L5.41421356,10 Z" fill-rule="evenodd"/></svg>
    );
};

export default IconReply;
