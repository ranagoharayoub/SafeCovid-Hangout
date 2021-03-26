import React, { useState } from 'react'
import Rank from '../Components/Rank'
import RiskQuest from '../Components/RiskQuest'
import SignUp from '../Components/SignUp'
import './RiskAsses.css'
import { Link } from 'react-router-dom'

function RiskAsses() {

    const [riskRank, setriskRank] = useState('Not Assigned')
    
    const rankA = () => {
        setriskRank('A')
    }
    const rankB = () => {
        setriskRank('B')
    } 
    const rankC = () => {
        setriskRank('C')
    } 
    const rankD = () => {
        setriskRank('D')
    }

    console.log(riskRank)
    return (
        <div className='risk-cont'>
            <div className='risk-upper'>
                    <Link  to='/' ><button className='back-btn'>Back</button></Link>
                    <p className='risk-title'>Complete Your Risk Assessment Profile</p>
                    <div></div>
            </div>
            <div className='risk-lower'>
                <div className='risk-left-cont'>
                    <SignUp></SignUp>
                </div>
                <div className= 'risk-center-cont'>
                    <RiskQuest rankPropA={rankA} rankPropB={rankB} rankPropC={rankC} rankPropD={rankD} ></RiskQuest>
                </div>
                <div className= 'risk-right-cont'>
                    <Rank rank = {riskRank}></Rank>
                </div>
            </div>
        </div>
    )
}

export default RiskAsses
