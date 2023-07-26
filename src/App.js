
// Most important basic  part in reactjs

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const products=[
    {name:'Phone',price:10000},
    {name:'leptop',price:200000},
    {name:'watch',price:1300}
  ]
  return (
    <div className="App">
    {
      products.map(munir=><Jakir name={munir.name} price={munir.price }></Jakir>)
    }
    <ExternalUsers></ExternalUsers>
    </div>
  );
}


function Jakir(props){
  return(
    <div>
      name:{props.name} price:{props.price}
    </div>
  )
}

// data load with use state and  use effect .

function ExternalUsers(){
  const [users,setUser]=useState();
  useEffect(  ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUser(data))  // call set user and data send data 
  } ,[])
  return(
    <div>
  
 <p> user:{users.length}</p>
 {
  users.map(user=><li>{user.name}</li>)
 }

    </div>
  )
}

export default App;
