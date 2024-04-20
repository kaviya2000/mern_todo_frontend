import React,{useState} from 'react'
import axios from 'axios'

const Signup = () => {
    const [names, setNames]=useState('');
    const [fname, setFName]=useState('');
    const [mname, setMName]=useState('');
    const [age, setAge]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const[datas, setDatas]=useState([])
    
     const handlepost=()=>{
        axios.post("http://localhost:5000/kaviya",{ names, fname, mname, age, email, password})
        .then(()=>
    {
        alert("data saved successfully");
        setNames("");
        setFName("");
        setMName("");
        setAge("");
        setEmail("");
        setPassword("")
    })
    .catch(()=>
    {
        alert("data saved not successfully");
    })
     }

     const handleget=()=>{
      axios.get("http://localhost:5000/anu")
      .then((res)=>{
          setDatas(res.data)
    
      })
      .catch(()=>{
        alert("error in sending data")
      })
     }
  return (
    <div>
      <center>
      <label>Name</label>
       <input type='text' value={names} onChange={(e)=>setNames(e.target.value)}/>
       <br/>
       <label>Father's Name</label>
       <input type='text' value={fname} onChange={(e)=>setFName(e.target.value)}/>
       <br/>
       <label>Mother's Name</label>
       <input type='text' value={mname} onChange={(e)=>setMName(e.target.value)}/>
       <br/>
       <label>Age</label>
       <input type='Number' value={age} onChange={(e)=>setAge(e.target.value)}/>
       <br/>
      <label>Email</label>
       <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <br/>
       <label>Password</label>
       <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <br/>
       <button onClick={handlepost}>Signup</button>

       <button onClick={handleget}>Data retrival</button>{
        datas.map((item,index)=>(
          <li key={index}>Name:{item.names},Fname:{item.fname}</li>
        ))
      } 

     






       </center>
    </div>
  )
}

export default Signup
