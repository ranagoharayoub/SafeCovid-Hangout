import React, {useState, useContext, useEffect} from 'react';
import {NavLink as Link, useHistory} from 'react-router-dom';
import ApiClient from '../CommonMethods/APIHandle';
import {ConfidentialContext} from '../Context/Context';
import './SignIn.css';

function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const {value, setValue} = useContext(ConfidentialContext);
	let history = useHistory();

	const checkSignIn = (e) => {
	     e.preventDefault();
		
		if(!username || !password){
			 setError(true)
		}
		else{
			setError(false)

			// Sign In API
			const credentials = {email: username, password: password}
			const apiUrl = 'http://localhost:3090/user/signin/';
			const customerDataUrl = 'http://localhost:3090/user/';
		
			ApiClient.sendPostAuthentication(apiUrl,credentials,(res)=>{
				if(res.data){
					console.log(res)
					setValue({...value, userId: res.data.userId, token: res.data.token})	
					ApiClient.sendGetAuthentication(customerDataUrl, res.data.userId,(res)=>{
						if(res){
							const token = value.token
							const userId = value.userId
							console.log(`userId-${userId}`)
							console.log(`token-${token}`)
							console.log('Data of specific user', res)
							// setValue({...value, userRank: res.data.rank, token: token, userId: userId})
							history.push('/group')
						}
						else{
							setError(true)
							console.log(res)
						}	
					})
				
				}
				else{
					setError(true)
					console.log(res)
				}	
			})

		}
	}

	useEffect(()=>{
		console.log('AUTH CONTEXT', value);
	},[value])

    return (
        <div className='sing-margin'>
			<Link className="sing-create" to="/risk">
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
						type={'password'}
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
