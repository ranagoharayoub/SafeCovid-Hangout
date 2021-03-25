import React from 'react'
import './SignIn.css'

function SignIn() {
    return (
        <div className='sing-margin'>
            <div className='signin-title'>
                <p>Sign In</p>
            </div>
            <form className='sign-form'>
                <label style={{color: 'dodgerblue'}}>Email/username</label>
                <input></input>
                <label style={{color: 'dodgerblue'}}>Password</label>
                <input ></input>
                <button>Sing in</button>
            </form>
        </div>
    )
}

export default SignIn
