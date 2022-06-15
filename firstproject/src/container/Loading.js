import React from 'react';

function Loading(Component) {
    return function Load({ourData,ourLoading}){
        if(ourLoading){
            return(
                <h1 align="center">Loading...</h1>
            )
        }else{
            return(
                <Component Data={ourData}/>
            )
        }
    }
}

export default Loading;