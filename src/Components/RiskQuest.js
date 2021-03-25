import React from 'react'
import './RiskQuest.css'

function RiskQuest() {
    return (
        <div className='quest-cont'>
            <div className='quest-title'>
                <p>Take Risk Questionaire</p>
            </div>
            <div className='questionaire'>
                <p>Risk Assessment</p>
                <p>Please answer actually risk preference assuming all other group participants are "low risk"</p>
                <form className='questanaire-form'>
                    <label>Are you comfortable attending an open outdoor activity (hiking, walk, picnic) ? (Y/N) </label>
                    <input></input>
                    <label>Are you comfortable attending a confined outdoor outdoor activity (outdoor activity) ? (Y/N) </label>
                    <input></input>
                    <label>Are you comfortable attending an indoor private activity (game night, home dinner) ? (Y/N) </label>
                    <input></input>
                    <label>Are you comfortable attending an indoor public activity (game night, home dinner) ? (Y/N) </label>
                    <input></input>
                    <div className='submit-btn'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RiskQuest
