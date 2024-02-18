import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter ,Routes ,Route,useNavigate,useParams,Link} from 'react-router-dom'
export default function TodoApp(){
   return (
    <div className="TodoApp">
        <HeaderComponent />    
        <BrowserRouter>
    <Routes>
         <Route path='/' element={ <LoginComponent /> }/>
        <Route path='/login' element={ <LoginComponent /> }/>
        <Route path='/welcome/:username' element={<WelcomeComponent /> }/>
        <Route path='/todos' element={<ListTodosComponent /> }/>
        <Route path='/logout' element={<LogoutComponent /> } /> 
        <Route path='*' element={<ErrorComponent /> }/>
    </Routes>
</BrowserRouter>
<FooterComponent />
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
        navigate(`/welcome/${username}`)
    }
    else{
        setshowSuccessMessage(false)
        setshowErrorMessage(true)
    }
}
    return(
        <div className="Login">
              <h1>Time to login!</h1>
              {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
              {showErrorMessage && <div className="errorMessage">Authentication Failed ,Please check your credentials</div>}
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

    const {username}=useParams()
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            Manage your todos - <Link to="/todos">Go here</Link>
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404 . Reach out to our team at ABC-DEG-GHIJ.
            </div>
        </div>
    )
}
function ListTodosComponent(){

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
    ]
    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
            <table className="table">
                    <thead>
                            <tr>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Is Done?</td>
                                <td>Target Date</td>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer 
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}
