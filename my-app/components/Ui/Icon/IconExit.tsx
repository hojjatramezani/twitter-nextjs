import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
    onClick?: () => void
}

const IconExit = (props: IIcon) =>
{
    return (
        <svg onClick={props.onClick} className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><path d="M0 0h48v48h-48z" fill="none"/><path d="M20.17 31.17l2.83 2.83 10-10-10-10-2.83 2.83 5.17 5.17h-19.34v4h19.34l-5.17 5.17zm17.83-25.17h-28c-2.21 0-4 1.79-4 4v8h4v-8h28v28h-28v-8h-4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z"/></svg>
    );
};

export default IconExit;