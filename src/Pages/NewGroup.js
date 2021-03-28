import React, { createContext, useContext, useState } from 'react'
import {ConfidentialContext} from '../Context/Context';
import ApiClient from '../CommonMethods/APIHandle';
import { useHistory } from "react-router-dom";
function NewGroup() {
    
    const {value, setValue} = useContext(ConfidentialContext);
    let  history = useHistory()
    const [newGroup, setnewGroup] = useState('')
    const [error, seterror] = useState('')
        const createGroup = (e) =>{
            if(value.rank !== 'Not Assigned'){
                const apiUrl = 'http://localhost:3090/group/';
                const checking = {  check1: false,
                                    check2: false,
                                    check3: false,
                                    check4: false
                                }
                const  userId = value.userId;
                const rank = value.rank
                //Grouptitle is inserted in creation
                console.log(newGroup)             
                const  creation = { rank: rank, 
                                    checks: checking,
                                    userId: userId,
                                    groupTitle: newGroup   
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
                else{
                    seterror('Please Login to to create a Group')
                }
                e.preventDefault()
                console.log(newGroup)
        } 
    
    return (
        <div className='new-group'>
            <div style={{display: 'flex', justifyContent: 'center', borderBottom: '1px solid lightgrey'}}>
                <p style={{fontSize: 'x-large', color:'dodgerblue'}}>Create New Group</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', marginTop:'50px'}}>
                <form onSubmit={createGroup} style={{display:'flex', flexDirection:'column'}}>
                    <label style={{fontWeight:'500'}}>Group Title</label>
                    <input value={newGroup} onChange={(e) => setnewGroup(e.target.value)} placeholder='Type here....'  
                    style={{marginTop:'10px', background:'lightgrey',borderRadius: '10px',padding: '10px 0px',border: 'none', textAlign:'center'}}></input>
                    <button type='submit' style={{marginTop:'10px', cursor: 'pointer' ,color:'white', background:'dodgerblue' ,borderRadius: '20px',border: 'none',padding: '10px 0px'}}>Create Group</button>
                </form>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', color:'darkred', marginTop:'30px'}}>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default NewGroup
