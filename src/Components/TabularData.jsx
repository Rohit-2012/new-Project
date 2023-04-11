import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TabularData.module.css'


export default function DataTable() {

    const [profile, setProfile] = useState([])
    const [post, setPost] = useState({
      userId: '', 
      title: '',
      body: ''
    })

    function handleInput(event){
      setPost({...post, [event.target.name]: event.target.value})
    }
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
       setProfile(response.data);
      })
    },[])
  
    const handleClick = (Id)=>{
      const newProfile = profile.filter((ele)=>ele.id !== Id)
      setProfile(newProfile)
    }

    function handlePost(e){
      e.preventDefault()
      axios.post('https://jsonplaceholder.typicode.com/posts', {post}).then((response)=>{console.log(response);})
    }


    return (
      <div>
        <h1>TABULAR DATA</h1>
        <form onSubmit={handlePost}>
          <span>User-Id</span><input type="text" onChange={handleInput}/>
          <span>Title</span><input type="text" onChange={handleInput}/>
          <span>Body</span><input type="text" onChange={handleInput}/>
          <button>POST DATA</button>
        </form>
        <hr />
       <table className={styles.mainBox}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>User-Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {profile.map((ele)=>{
              return(
                <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.userId}</td>
                <td>{ele.title}</td>
                <td>{ele.body}</td>             
                <td><button onClick={()=>handleClick(ele.id)}>❌</button></td>             
                </tr>
              )
            })}
        </tbody>
       </table>
      </div>
    );
  }
  
