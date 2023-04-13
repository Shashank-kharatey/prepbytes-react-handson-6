import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
    let navigate = useNavigate()
    const [user,setUser]=useState({
        name:"",
        age:"",
        course:"",
        batch:""
    })
    const onInputChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigate("/student")


    }


  return (
    <div>
        <form onSubmit={e=>onSubmit(e)}>
        <label htmlFor="">Name</label><br />
        <input onChange={e=>onInputChange(e)} value={user.name}type="text" name="name" id="" /><br />
        <label htmlFor="age">age</label><br />
        <input onChange={e=>onInputChange(e)} value={user.age}type="text" name="age" id="" /><br />
        <label htmlFor="course">course</label><br />
        <input onChange={e=>onInputChange(e)} value={user.course}type="text" name="course" id="" /><br />
        <label htmlFor="batch">batch</label><br />
        <input onChange={e=>onInputChange(e)} value={user.batch}type="text" name="batch" id="" />
        <button type="submit">Add User</button>
        </form>
    </div>
  )
}

export default AddStudent