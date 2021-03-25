import React from 'react'
import './SignUp.css'

function SignUp() {
    return (
        <div className='signup-cont'>
            <div className='signup-title'>
                    <p>Create Account</p>
            </div>
            <div >
                <form className='signup-form'>
                    <label>Name</label>
                    <input></input>
                    <label>Email</label>
                    <input></input>
                    <label>Username</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button>SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
