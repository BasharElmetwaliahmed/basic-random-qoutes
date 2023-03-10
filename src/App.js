import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [qoute,setQoute]=useState("");
  const [author,setAuthor]=useState("");
  const [loading,setLoading]=useState(false)
  const fetchQoute=async()=>{
    setLoading(true)
    try{
   const response= await fetch('https://api.quotable.io/random');
   if(!response.ok) throw new Error('some thing goes wrong')
   const data=await response.json();
   setQoute(data.content);
   setAuthor(data.author)}
   catch(error){
    alert(error)
   }
   setLoading(false)
  }
  useEffect(()=>{
    fetchQoute();
  },[])
  return (
    <div className="App">
      {loading ?<p>...loading</p>:
        <Fragment>
      <p>{qoute}</p>
      <p>{author}</p>
        </Fragment>

      }
      <button onClick={fetchQoute}>Fetch qoute</button>

    </div>
  );
}

export default App;
