import React,{useState, useEffect} from 'react'
import './SignUp.css'

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const checkSignUp = (e) => {
		e.preventDefault();		

		if(name !== '' && email !== '' && password !== '' && username !== ''){
			setNameError(false);   setEmailError(false);  setUsernameError(false);     setPasswordError(false);
		} 
		if(!name){
			 setNameError(true)
		}else{
			setNameError(false)
		}
		if(!email){
		     setEmailError(true)
		}else{
			setEmailError(false)
		}
		if(!username){
		     setUsernameError(true)
		}else{
			setUsernameError(false)
		}
		if(!password){
			setPasswordError(true)
		}else{
			setPasswordError(false)
		}
		
	}


    return (

        <div className='signup-cont'>
            <div className='signup-title'>
                    <p>Create Account</p>
            </div>
            <div >
                <form className='signup-form'>
                    <label>Name</label>
                    <input placeholder={'Please write name'}
					    style={nameError ? {borderColor:'red'} : {borderColor: 'black'} }
						type={'text'}
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete="off" />
                    
					<label>Email</label>
                    <input placeholder={'Please write email'}
						type={'email'}
						style={emailError ? {borderColor:'red'} : {borderColor: 'black'} }
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="off" />
                    
					<label>Username</label>
                    <input placeholder={'Please write username'}
						type={'text'}
						style={usernameError ? {borderColor:'red'} : {borderColor: 'black'} }
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="off" />
                    
					<label>Password</label>
                    <input placeholder={'Please write password'}
						type={'text'}
						style={passwordError ? {borderColor:'red'} : {borderColor: 'black'} }
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="off" />
                    
					<button onClick={(e)=>checkSignUp(e)} >SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
