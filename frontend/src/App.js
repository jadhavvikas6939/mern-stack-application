
import React, {useState, useEffect} from "react";

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/users")
      .then(res=>res.json())
      .then(data=>setUsers(data));
  },[]);

  const addUser=()=>{
    fetch("http://localhost:5000/add",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,email})
    }).then(()=>window.location.reload());
  };

  return (
    <div>
      <h2>MERN CRUD</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map(u=><li key={u._id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
}

export default App;
