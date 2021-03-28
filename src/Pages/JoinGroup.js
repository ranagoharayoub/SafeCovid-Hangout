import React, { useEffect, useContext, useState, Fragment } from 'react'
import './JoinGroup.css'
import { Link } from 'react-router-dom'

import ApiClient from '../CommonMethods/APIHandle';
import { ConfidentialContext } from '../Context/Context';




function JoinGroup() {

    const { value, setValue } = useContext(ConfidentialContext);
    const [groups, setGroups] = useState(null)

    useEffect(() => {
        getGroups()
    }, [])

    const getGroups = () => {
        const apiUrl = 'http://localhost:3090/group/getGroups/';
        const rank = value.userRank
        const Rank = { rank }

        ApiClient.sendPostAuthentication(apiUrl, Rank, (res) => {
            if (res) {
                console.log(res, "....Group")
                setGroups(res.data)
            }
            else {
                console.log(res)
            }
        })
    }

    const joinGroup = (group_id) => {
        // console.log(group_id)
        const apiUrl = 'http://localhost:3090/group/join/';
        const userId = value.userId
        const groupId = group_id
        const body = { userId, groupId }

        ApiClient.sendPostAuthentication(apiUrl, body, (res) => {
            if (res) {
                getGroups();
            }
            else {
                console.log(res)
            }
        })
    }

    const leaveGroup = (group_id) => {
        // console.log(group_id)
        const apiUrl = 'http://localhost:3090/group/leave/';
        const userId = value.userId
        const groupId = group_id
        const body = { userId, groupId }

        ApiClient.sendPostAuthentication(apiUrl, body, (res) => {
            if (res) {
                getGroups();
            }
            else {
                console.log(res)
            }
        })
    }



    return (
        <div className='join-cont'>
            <div className='join-upper'>
                <Link to='/' ><button className='back-btn'>Back</button></Link>
                <p className='join-title'>Join a Group</p>
                <Link to='/create-group' >
                    <button className='back-btn'>Create a Group</button>
                </Link>
            </div>
            <div className='join-lower'>
                {
                    groups ? groups.map((group, index) => {
                        return (

                            <Fragment key={index}>
                                {
                                    group.ownerId !== value.userId &&
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div className='group'>
                                            <div className='group-pic'>
                                                <img src='/Event.png' alt='img'></img>
                                            </div>
                                            <div className='join-org-btn' style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '20px'}}>
                                                {
                                                    // console.log(value.userId, group.users , group.users.includes(value.userId) , '...Checking')
                                                    group.users.includes(value.userId) ?
                                                        <div className="join-org-btn">
                                                            <button style={{ width: "100%" }} className='join-btn'>Group Joined</button>
                                                            <button
                                                                style={{ width: "100%", background: "red", color: "white" }}
                                                                className='join-btn' onClick={() => leaveGroup(group._id)}>Leave Group</button>
                                                        </div>
                                                        :
                                                        <button style={{ width: "100%" }} className='join-btn' onClick={() => joinGroup(group._id)}>Join</button>
                                                }

                                                <button className='org-login'>Organizer Login</button>
                                            </div>
                                        </div>
                                        <div className='event'>
                                            <p>{group.groupName} <br></br> Moderator: {group.ownerEmail}</p>
                                        </div>
                                    </div>
                                }
                            </Fragment>

                        )
                    })
                        :
                        <span>No Group Matched Your Rank</span>
                }

            </div>
        </div>
    )
}

export default JoinGroup
