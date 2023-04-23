import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://your-api-url.com/login',{
            email: email,
            password: password
        })
        .then (response => {
            localStorage.setItem('token', response.data.token)
            history.push('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
    }


return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button type='submit'>Login</button>
        </form>
    </div>
    )
}

export default Login