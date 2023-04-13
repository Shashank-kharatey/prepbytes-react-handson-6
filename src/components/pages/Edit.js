import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Edit = () => {
    let navigate = useNavigate()
    const { id }=useParams();
    const [user,setUser]=useState({
        name:"",
        age:"",
        course:"",
        batch:""
    })
    // const {name,age,course,batch} = user
    const onInputChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    // useEffect(()=>{
    //  loadUser()
    // }, []);

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user)
        loadUser()
        navigate("/student")
    }

    const loadUser = async () =>{
      const result = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(result.data);
      console.log(result)
    };


  return (
    <div>
      <h1>edit</h1>
        <form onSubmit={e=>onSubmit(e)}>
        <label htmlFor="">Name</label><br />
        <input onChange={e=>onInputChange(e)} value={user.name}type="text" name="name" id="" /><br />
        <label htmlFor="age">age</label><br />
        <input onChange={e=>onInputChange(e)} value={user.age}type="text" name="age" id="" /><br />
        <label htmlFor="course">course</label><br />
        <input onChange={e=>onInputChange(e)} value={user.course}type="text" name="course" id="" /><br />
        <label htmlFor="batch">batch</label><br />
        <input onChange={e=>onInputChange(e)} value={user.batch}type="text" name="batch" id="" />
        <button type="submit">Update User</button>
        </form>
    </div>
  )
}

export default Edit