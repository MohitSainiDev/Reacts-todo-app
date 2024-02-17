import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter ,Routes ,Route,useNavigate} from 'react-router-dom'
export default function TodoApp(){
   return (
    <div className="TodoApp">
        <BrowserRouter>
    <Routes>
         <Route path='/' element={ <LoginComponent /> }></Route>
        <Route path='/login' element={ <LoginComponent /> }></Route>
        <Route path='/welcome' element={<WelcomeComponent /> }></Route>
    </Routes>
</BrowserRouter>
    </div>
   )
}


function LoginComponent(){

    const[username,setUsername] =useState('in28minutes')
    const[password,setPassword] =useState('')
    const[showSuccessMessage,setshowSuccessMessage] =useState(false)
    const[showErrorMessage,setshowErrorMessage] =useState(false)
    const navigate = useNavigate();

    function handelUsernameChange(event){
        setUsername(event.target.value);
    }
    function handelPasswordChange(event){
        setPassword(event.target.value);
    }

function handleSubmit(){
    if(username==='in28minutes' && password==='dummy'){
        setshowSuccessMessage(true)
        setshowErrorMessage(false)
        navigate('/welcome')
    }
    else{
        setshowSuccessMessage(false)
        setshowErrorMessage(true)
    }
}
// function SuccessMessageComponent(){
//     if(showSuccessMessage)
//     {
//     return  <div className="successMessage">Authenticated Successfully</div>
//     }
//     return null
// }
// function ErrorMessageComponent(){
//     if(showErrorMessage)
//     {
//     return  <div className="errorMessage">Authentication Failed ,Please check your credentials</div>
//     }
//     return null
// }
    return(
        <div className="Login">

              {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
              {showErrorMessage && <div className="errorMessage">Authentication Failed ,Please check your credentials</div>}
            {/* <SuccessMessageComponent/>
            <ErrorMessageComponent/> */}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handelUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handelPasswordChange}/>
                </div>
                <div>
                   <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}