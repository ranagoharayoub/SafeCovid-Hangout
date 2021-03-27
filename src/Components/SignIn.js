import React, {useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import './SignIn.css';

function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const checkSignIn = (e) => {
	     e.stopPropagation();
		
		if(!username || !password){
			 setError(true)
		}
		else{
			setError(false)
			alert(password)
		}
	}

    return (
        <div className='sing-margin'>
			<Link className="sing-create" to="/signup">
				Create Account
			</Link>


            <div className='signin-title'>
                <p>Sign In</p>
            </div>
            <form className='sign-form'>

                <label style={{color: 'dodgerblue'}}>Email/username</label>
                <input placeholder={'Please write user name'}
						type={'text'}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="off" />

                <label style={{color: 'dodgerblue'}}>Password</label>
                <input placeholder={'Please write password'}
						type={'text'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="off" />

                <button onClick={(e)=>checkSignIn(e)} >Sign In</button>
            </form>

			{error &&
			<div className="error-credential">
			   Please write correct credential
			</div>
			}
        </div>
    )
}

export default SignIn
