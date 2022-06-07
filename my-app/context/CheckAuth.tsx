import Router from 'next/router';
import React, { useEffect, useState } from 'react';


const CheckAuth = ( props: any ) =>
{
    const [ ls, setLs ] = useState<any>( '' );
    useEffect( () =>
    {
        const lsvar = localStorage.getItem( "nameTwitter" );
        setLs( lsvar );
        if ( !lsvar )
            Router.push( "/authorization" );
        console.log( "11111111" );

    }, [ls] );
    return (
        <div>
            {props.children}
        </div>
    );
};

export default CheckAuth