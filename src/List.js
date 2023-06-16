import React from 'react'
import App from './App';

function List() {
    const students=[
        {name:"kumar",email:"kumar@gmail.com",age:22},
        {name:"ram",email:"Ram@gmail.com",age:"23"},
        {name:"Riya",email:"riya@gmail.com",age:"18"},
        {name:"british",email:"british@gmail.com",age:"20"},
    ]
  return (
    <div className="App">
  <div>List</div>
  <table border="1" >
  <tr> 
    <th> Name</th>
    <th> Email</th>
    <th> Age</th>
    <th> Action</th>
    
    </tr> 
  {
    students.map((data) =>
    <tr> 
    <td> {data.name}</td>
    <td> {data.email}</td>
    <td> {data.age}</td>
    </tr> 
     
    )
  }
  </table>
</div>

  )

    }

export default List