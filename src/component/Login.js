import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const {showAlert} = props;
    let navigate = useNavigate();


    const [credentials, setcredentials] = useState({email:'', password:''})

    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
      }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",    
               headers: {
              "Content-Type": "application/json", 
            },    
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
                   });
          const json = await response.json();  
          console.log(json)

          if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate('/home');
            showAlert('logged in sucessfully','success');
          }else{
            showAlert('try with correct credentials' ,'success')
          }
         
    }
  return (
    <>
     <div className="container me2">
      <h1 className='inot'>Login to iNotebook</h1>
    </div>
    <div className="para">
      <p>This is one of the topmost note apps in playstore, the only other being Listing it app. But it's purpose is different. My notes has cloud storage, multiple folders, takes unlimited text in a single note, can share multiple notes in a single go etc. I have started using it to write all my major notes...........</p>
    </div>
    
    <div className='foo'>
        <form action="" onSubmit={handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="name" className="form-label xcxx">Email</label>
    <input type="text" className="form-control xcxx" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="password" className="form-label xcxx">Password</label>
    <input type="text" className="form-control xcxx" id="password" name='password' onChange={onChange} value={credentials.password}  />
  </div> 
  
  <div className="container btr">
  <button    type="submit" className=" btn btn-primary xcxx"  >Add Note</button>
  </div>
</form> 

    </div>
    </>
  )
}

export default Login
