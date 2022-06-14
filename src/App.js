import React, { useEffect, useState } from 'react';
import Loading from './container/Loading';
import Home from './container/Home';
import Counter from './container/counter/Counter';


const LoadingWithHome = Loading(Home);

function App(props) {

  const [loading, setLoading ]=useState(false);
  const [data, setData]=useState([]);

  const orgData =[
    {id: 6806, name: "Kartik"},
    {id: 7290, name: "maithil"}
  ]

  useEffect(()=>{
    setLoading(true);
    setTimeout (()=> {setLoading(false); setData(orgData)},2000)

  },[])
  return (
    <div> 
    <LoadingWithHome  Iloading ={loading}
     data = {data} />
  
    <Counter />
    </div>
  );
}

export default App;