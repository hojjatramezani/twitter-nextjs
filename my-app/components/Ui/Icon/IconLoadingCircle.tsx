import React from 'react';

interface IIcon
{
    width: number;
    height?: number;
    className?: string;
    color?: string;
    onClick?: () => void;
}

const IconLoadingCircle = ( props: IIcon ) =>
{
    return (
        <svg onClick={props.onClick} className={props.className} width={props.width} height={props.height ? props.height : props.width} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#3169d2" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
            </circle>
        </svg>
    );
};

export default React.memo( IconLoadingCircle );