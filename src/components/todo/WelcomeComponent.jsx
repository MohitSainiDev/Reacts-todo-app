import {useParams, Link} from 'react-router-dom'
function WelcomeComponent(){

    const {username}=useParams()
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            Manage your todos - <Link to="/todos">Go here</Link>
        </div>
    )
}

export default WelcomeComponent