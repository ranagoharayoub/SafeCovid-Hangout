import React, { useState } from 'react'
import './RiskQuest.css'

function RiskQuest({rankPropA, rankPropB,rankPropC,rankPropD,}) {

    const [hiking, sethiking] = useState('Yes')
    const [diningOutdoor, setdiningOutdoor] = useState('Yes')
    const [homeDinner, sethomeDinner] = useState('Yes')
    const [movie, setmovie] = useState('Yes')
    const [rank, setrank] = useState('N/A')

    const profileRank = (e) =>{
            console.log(hiking)
            console.log(diningOutdoor)
            console.log(homeDinner)
            console.log(movie)
            e.preventDefault()

            if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='Yes'&& movie==='Yes') {
                setrank('A')
                rankPropA()
            }
            if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='Yes'&& movie==='No') {
                setrank('B')
                rankPropB()
            }
            if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='No'&& movie==='No') {
                setrank('C')
                rankPropC()
            }
            if (hiking==='Yes'&& diningOutdoor==='No'&& homeDinner==='No'&& movie==='No') {
                setrank('D')
                rankPropD()
            }

    }
    console.log(rank)
    return (
        <div className='quest-cont'>
            <div className='quest-title'>
                <p>Take Risk Questionaire</p>
            </div>
            <div className='questionaire'>
                <p>Risk Assessment</p>
                <p>Please answer assuming all other group participants are "low risk"</p>
                <form onSubmit={profileRank} className='questanaire-form'>
                    <label>Are you comfortable attending an open outdoor activity (hiking, walk, picnic) ? (Y/N) </label>
                    <select value={hiking} onChange={(e)=>sethiking(e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label>Are you comfortable attending a confined outdoor activity (dining outdoors) ? (Y/N) </label>
                    <select value={diningOutdoor} onChange={(e)=>setdiningOutdoor(e.target.value)} >
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label>Are you comfortable attending an indoor private activity (game night, home dinner) ? (Y/N) </label>
                    <select value={homeDinner} onChange={(e)=>sethomeDinner(e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <label>Are you comfortable attending an indoor public activity (game night, movie theater)? (Y/N) </label>
                    <select value={movie} onChange={(e)=>setmovie(e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <div className='submit-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RiskQuest
