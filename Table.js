import React, {useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import './Project.css'
const Table = ({post , handleDelete}) => {
    
    const [uname,setName]=useState("");
    const [college,setCollege]=useState("");
    const [date,setDate]=useState("");
    const [qualification,setQualification]=useState("");
    const [year,setYear]=useState("");
    const handlePost = () =>{
     
      const data={
        name: uname,
        college: college,
        date: date,
        qualification: qualification,
        year: year
      }
      axios.post(`http://localhost:8000/Placements/`,data)
      .catch((err)=>console.log("Error",err))
    }
  
  return (
    <>
    <div id='form'>
        <div className="form">
        <h1>Add new data here</h1>
            <label htmlFor="name">Enter a name</label><br/>
            <input type="text" value={uname} onChange={(e)=>setName(e.target.value)}/><br/>
            <label htmlFor="name">Enter a college</label><br/>
            <input type="text" value={college} onChange={(e)=>setCollege(e.target.value)}/><br/>
            <label htmlFor="name">Enter a date</label><br/>
            <input type="text" value={date} onChange={(e)=>setDate(e.target.value)}/><br/>
            <label htmlFor="name">Enter a qualification</label><br/>
            <input type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)}/><br/>
            <label htmlFor="name">Enter a year</label><br/>
            <input type="text" value={year} onChange={(e)=>setYear(e.target.value)}/><br/>
            <button className="btn btn-primary my-3" onClick={handlePost}>Add Data</button>
        </div>
    </div>
    <div>
        <h1 className='h1'>Data</h1>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>College</th>
                    <th>Date</th>
                    <th>Qualification</th>
                    <th>Year</th>
                    <th>edit</th>
                    <th>Delete</th>
                </tr>
                {post && post.map((Post)=>(
                    <tr>
                        <td>{Post.id}</td>
                        <td>{Post.name}</td>
                        <td>{Post.college}</td>
                        <td>{Post.date}</td>
                        <td>{Post.qualification}</td>
                        <td>{Post.year}</td>
                          <td><Popup trigger={<button className="btn btn-primary">Edit</button>} position="right center">
                            <h4>Update Data Here</h4>
                                <label htmlFor="name">Enter a name</label><br/>
                                <input type="text" placeholder={Post.name}/><br/>
                                <label htmlFor="name">Enter a college</label><br/>
                                <input type="text" placeholder={Post.college}/><br/>
                                <label htmlFor="name">Enter a date</label><br/>
                                <input type="text" placeholder={Post.date}/><br/>
                                <label htmlFor="name">Enter a qualification</label><br/>
                                <input type="text" placeholder={Post.qualification}/><br/>
                                <label htmlFor="name">Enter a year</label><br/>
                                <input type="text" placeholder={Post.year}/><br/>
                                <button class="btn btn-primary">Update</button>
                        </Popup> 
                        
                        </td>
                        <td><button className="btn btn-primary" onClick={() => handleDelete(Post.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
       
    </div>
    </>
  )
}
export default Table
