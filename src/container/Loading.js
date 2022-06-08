import React from 'react';

function Loading(Component) {
    return function LoadingLoading({Iloading, data}) {
        if(Iloading){
            return(
                <h1>Loading....</h1>
            )

        }else{
            return(
                <Component data={data}/>
            )
           
            
        }
    }
}

export default Loading;