import React,{useState} from 'react'
import Rank from '../Components/Rank'
import RiskQuest from '../Components/RiskQuest'
import SignUp from '../Components/SignUp'
import './RiskAsses.css'
import { Link } from 'react-router-dom'

function RiskAsses() {
    const [userCred, serUserCred] = useState(null);
    
    return (
        <div className='risk-cont'>
            <div className='risk-upper'>
                    <Link  to='/' ><button className='back-btn'>Back</button></Link>
                    <p className='risk-title'>Complete Your Risk Assessment Profile</p>
                    <div></div>
            </div>
            <div className='risk-lower'>
                <div className='risk-left-cont'>
                    <SignUp credential={(cred)=>serUserCred(cred)}></SignUp>
                </div>
                <div className= 'risk-center-cont'>
                    <RiskQuest credential={userCred}  forSignup={true}></RiskQuest>
                </div>
                <div className= 'risk-right-cont'>
                    <Rank></Rank>
                </div>
            </div>
        </div>
    )
}

export default RiskAsses
