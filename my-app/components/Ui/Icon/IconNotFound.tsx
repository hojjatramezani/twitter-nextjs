import React from 'react';

interface IIcon {
    width: number;
    height?: number;
    className?: string
    color?: string
    onClick?: () => void
}

const IconNotFound = (props: IIcon) =>
{
    return (
        <svg onClick={props.onClick} className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 32 32" ><title/><desc/><defs/><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#157EFB" id="icon-7-sad-face"><path d="M16.5,29 C23.4035597,29 29,23.4035597 29,16.5 C29,9.59644029 23.4035597,4 16.5,4 C9.59644029,4 4,9.59644029 4,16.5 C4,23.4035597 9.59644029,29 16.5,29 Z M12,14 C12.5522848,14 13,13.5522848 13,13 C13,12.4477152 12.5522848,12 12,12 C11.4477152,12 11,12.4477152 11,13 C11,13.5522848 11.4477152,14 12,14 Z M21,14 C21.5522848,14 22,13.5522848 22,13 C22,12.4477152 21.5522848,12 21,12 C20.4477152,12 20,12.4477152 20,13 C20,13.5522848 20.4477152,14 21,14 Z M16.4813232,21 C13,21 11,23 11,23 L11,22 C11,22 13,20 16.4813232,20 C19.9626465,20 22,22 22,22 L22,23 C22,23 19.9626465,21 16.4813232,21 Z" id="sad-face"/></g></g></svg>
    );
};

export default React.memo(IconNotFound);