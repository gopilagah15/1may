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
    <div className='foo'>
        <form action="" onSubmit={handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Email</label>
    <input type="text" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password}  />
  </div> 
  
  <button    type="submit" className=" button"  >Add Note</button>
</form> 

    </div>
  )
}

export default Login
