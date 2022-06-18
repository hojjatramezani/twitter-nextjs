import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
}

const IconPic = (props: IIcon) =>
{
    return (
        <svg className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style></style></defs><title/><g data-name="Layer 8" id="Layer_8"><path fill='#ee7070' d="M29,31H3a1,1,0,0,1-1-1V2A1,1,0,0,1,3,1H29a1,1,0,0,1,1,1V30A1,1,0,0,1,29,31ZM4,29H28V3H4Z"/><path fill='#ee7070' d="M3,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l4.8-4.8A3,3,0,0,1,11,18.17l4.24,3a1,1,0,0,0,1.29-.11l4.39-4.38a3,3,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1-1.42,1.42l-4.58-4.59a1,1,0,0,0-1.42,0l-4.38,4.39a3,3,0,0,1-3.87.32l-4.24-3a1,1,0,0,0-1.29.11l-4.8,4.8A1,1,0,0,1,3,25Z"/><path fill='#ee7070' d="M17,14a4,4,0,1,1,4-4A4,4,0,0,1,17,14Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,17,8Z"/></g></svg>
    );
};

export default React.memo(IconPic);