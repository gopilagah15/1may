import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const {showAlert} =  props;
    let navigate = useNavigate();

    const [credentials, setcredentials] = useState({name:'',email:'', password:''})
    const {name, email, password} = credentials;
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
      }
    const handleSubmit =async(e)=>{
        e.preventDefault(); 
          const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        
            method: "POST",    
               headers: {
              "Content-Type": "application/json", 
            },    
            body: JSON.stringify({name,email,password}),
                   });
          const json = await response.json();  
          console.log(json)

          if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate('/home'); 
            showAlert('signed in sucessfully' , 'success');
          }else{
            showAlert('Try with correct credentials' , 'success');
          }
          
         
    }
  return (
    <>
     <div className="container me2">
      <h1 className='inot'>Signup to iNotebook</h1>
    </div>
    <div className="para">
      <p>This is one of the topmost note apps in playstore, the only other being Listing it app. But it's purpose is different. My notes has cloud storage, multiple folders, takes unlimited text in a single note, can share multiple notes in a single go etc. I have started using it to write all my major notes........</p>
    </div>
    <div className='foo'>
        <form action="" onSubmit={handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={name} aria-describedby="emailHelp"/>
     </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email" name='email' onChange={onChange} value={email} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" name='password' onChange={onChange} value={password}  />
  </div> 
  
  <button   type="submit" className="btn btn-primary"  >Add Note</button>
</form> 

    </div>
    </>
  )
}

export default Signup




