import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
}

const IconHome = (props: IIcon) =>
{
    return (
        <svg className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg"  baseProfile="tiny" id="Layer_1" version="1.2" viewBox="0 0 24 24"><path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/></svg>
    );
};

export default React.memo(IconHome);