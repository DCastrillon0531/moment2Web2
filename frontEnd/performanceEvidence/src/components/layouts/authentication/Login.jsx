import './Login.css'

const LogIn = () => {

    

    return (
        <form>
            <div className='container'>
                <h3>Log In</h3>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' />
                </div>
                <section className='buttons'>
                    <button type="button" className='btn'>
                        Sing In
                    </button>
                </section>
            </div>
        </form>
    )
}
export default LogIn
