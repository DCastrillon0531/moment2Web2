import { useState } from 'react'
import { users } from '../../dataBase/dataBase'
import { useNavigate } from "react-router-dom"
import './Login.css'


const LogIn = () => {

    const [getUsers, setUsers] = useState()
    const [getPassword, setPassword] = useState()
    const redirection = useNavigate()
    
    function validateLogIn(){

        users.some((user) => {
            console.log(user)
        })

        if (findUser()){
            redirection("/home")
        }
        else{
            console.log("Error")
        }
    }

    function findUser(){
        return users.some(
            (user) => user.user == getUsers && user.password == getPassword
        )
    }

    return (
        <form>
            <div className='container'>
                <h3>Log In</h3>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' onChange={(e) => setUsers(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <section className='buttons'>
                    <button type="button" className='btn' onClick={validateLogIn}>
                        Sing In
                    </button>
                </section>
            </div>
        </form>
    )
}
export default LogIn
