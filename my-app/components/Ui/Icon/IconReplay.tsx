import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
    onClick?: () => void
}


const IconReplay = (props: IIcon) =>
{
    return (
        <svg onClick={props.onClick} className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title/><path d="M21.71,5.29l-3-3a1,1,0,0,0-1.09-.21A1,1,0,0,0,17,3V5H5A3,3,0,0,0,2,8v3a1,1,0,0,0,2,0V8A1,1,0,0,1,5,7H17V9a1,1,0,0,0,.62.92A.84.84,0,0,0,18,10a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,21.71,5.29Z" fill="#464646"/><path d="M21,12a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H7V15a1,1,0,0,0-.62-.92,1,1,0,0,0-1.09.21l-3,3a1,1,0,0,0,0,1.42l3,3A1,1,0,0,0,6,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,7,21V19H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12Z" fill="#464646"/></svg>
    );


};

export default React.memo(IconReplay);
