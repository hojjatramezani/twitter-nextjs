import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
}

const IconLike = (props: IIcon) =>
{
    return (
        <svg className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg" id="Icons" viewBox="0 0 24 24"><defs><style></style></defs><path fill='#ee7070'  d="M12,22c8-4,11-9,11-14A6,6,0,0,0,12,4.686,6,6,0,0,0,1,8C1,13,4,18,12,22Z"/></svg>
    );
};

export default IconLike;