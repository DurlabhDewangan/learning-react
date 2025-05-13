import  { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username,pass });
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
            />
            <input 
                type="password" 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="Password" 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;

