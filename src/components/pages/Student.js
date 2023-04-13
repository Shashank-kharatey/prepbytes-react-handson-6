import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Student = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data.reverse());
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
      <div id='stu-btn'><Link to="/student/add">Add New Student</Link></div>
      <h1>Students Details</h1>
      <div className='student-table'>
        <div>Name</div>
        <div>Age</div>
        <div>Course</div>
        <div>Batch</div>
        <div>Change</div>
      </div>
      <div>
        {
          users.map((user, index) => (
            <div key={index+1} className='student-table'>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.course}</div>
              <div>{user.batch}</div>
              <div><Link to={`users/edit/${user.id}`}>Edit</Link> || 
              <button id="del-btn" onClick={()=>deleteUser(user.id)}>Delete</button></div>
            </div>
          ))
        }
      </div>


    </>
  )
}

export default Student