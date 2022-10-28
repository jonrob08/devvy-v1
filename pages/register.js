import { useState } from "react"
import axios from "axios"

const Register = () => {
    const [ name, setName ] = useState("")   
    // const [ username, setUsername ] = useState("")   
    const [ email, setEmail ] = useState("")   
    const [ password, setPassword ] = useState("")   
    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(name, email, password)

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post('/api/register', {name: name, email: email, password: password}, config)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register