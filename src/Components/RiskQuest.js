import React, { useEffect, useState, useContext } from 'react';
import './RiskQuest.css';
import {useStateValue} from '../Context/AuthContext';
import ApiClient from '../CommonMethods/APIHandle';
import {User_Rank} from '../Context/Reducer';
import {ConfidentialContext} from '../Context/Context';
import { useHistory } from "react-router-dom";
function RiskQuest(props) {

    const [hiking, sethiking] = useState('Yes')
    const [diningOutdoor, setdiningOutdoor] = useState('Yes')
    const [homeDinner, sethomeDinner] = useState('Yes')
    const [movie, setmovie] = useState('Yes')
    const [rank, setrank] = useState('Not Assigned')
    // const [{}, dispatch] = useStateValue()
    const {value, setValue} = useContext(ConfidentialContext);
    let  history = useHistory()
   
    const profileRank = (e) =>{
            console.log(hiking)
            console.log(diningOutdoor)
            console.log(homeDinner)
            console.log(movie)
            if(props.forSignup){
                const apiUrl = 'http://localhost:3090/user/signup/';
    
                if(props.credential !== null && rank !== 'Not Assigned'){
                    const  {name, username, email, password} = props.credential
                    const profile = {name,username,email,password,rank}
                   
                    ApiClient.sendPostAuthentication(apiUrl, profile, (res)=>{
                        if(res){
                            console.log(res)
                            history.push('/')
                        }
                        else{
                            console.log(res)
                        }	
                    }) 
                }
            }
            else if(props.forCreateGroup){
    
                if(rank !== 'Not Assigned'){
                const apiUrl = 'http://localhost:3090/group/';
                const checking = {  check1: false,
                                    check2: false,
                                    check3: false,
                                    check4: false
                                }
                const  userId = value.userId;               
                const  creation = { rank, 
                                    checks: checking,
                                    userId: userId   
                                    } 
                    console.log('CREATION =====>', creation)                
                    ApiClient.sendPostAuthentication(apiUrl, creation, (res)=>{
                        if(res){
                            console.log('Create-Groups', res)
                            history.push('/created-groups')
                        }
                        else{
                            console.log(res)
                        }	
                    }) 
                }
            }

            

            e.preventDefault()
    }

    // useEffect(() => {
    //     dispatch({
    //         type: User_Rank,
    //         payload: rank,
    //     })
    // }, [rank])

    useEffect(() => {
        setValue({...value, rank: rank})
        console.log('USER VALUE', value)
    }, [rank])

    useEffect(() => {
        if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='Yes'&& movie==='Yes') {
            setrank('A')
            
        }
        if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='Yes'&& movie==='No') {
            setrank('B')
            
        }
        if (hiking==='Yes'&& diningOutdoor==='Yes'&& homeDinner==='No'&& movie==='No') {
            setrank('C')
           
        }
        if (hiking==='Yes'&& diningOutdoor==='No'&& homeDinner==='No'&& movie==='No') {
            setrank('D') 
        }
        
    }, [hiking, diningOutdoor, homeDinner, movie])
    return (
        <div className='quest-cont'>
            <div className='quest-title'>
                <p>Take Risk Questionaire</p>
            </div>

            {props.forCreateGroup && 
            <div >
              <span>Rank: </span>  
              <span className="rankText">"{rank}"</span>
            </div>
            }

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
                    <label>Are you comfortable attending an indoor public activity (indoor dining, movie theater)? (Y/N) </label>
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
