import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './OrganizerPage.css'

import { useHistory } from "react-router-dom";


import { ConfidentialContext } from '../Context/Context';
import ApiClient from '../CommonMethods/APIHandle';

function OrganizerPage(props) {

    let history = useHistory();

    const { value, setValue } = useContext(ConfidentialContext);
    const [groupId, setGroupId] = useState(props.match.params.id)

    const [users, setUsers] = useState(null)
    useEffect(() => {
        setGroupId(props.match.params.id)
        const apiUrl = `http://localhost:3090/group/users/${props.match.params.id}`;
        ApiClient.sendGetGroup(apiUrl, (res) => {
            if (res) {
                console.log('Users', res.data)
                setUsers(res.data)
            }
            else {
                console.log(res)
            }
        })
    }, [])

    const deleteGroup = (id) => {
        // console.log(groupId)
        const apiUrl = `http://localhost:3090/group/remove/`;
        const userId = value.userId;
        const groupId = id;
        const body = { userId, groupId }
        ApiClient.sendPostAuthentication(apiUrl, body, (res) => {
            if (res) {
                console.log('Users', res)
                history.push('/created-groups')
            }
            else {
                console.log(res)
            }
        })
    }
    return (
        <div className='join-cont'>
            <div className='risk-upper'>
                <Link to='/created-groups' ><button className='back-btn'>Back</button></Link>
                <p className='risk-title'>Game Night: Organizer Page</p>
                <div></div>
            </div>
            <div className='profile-cont'>
                <div className='profile-center'>
                    {
                        users ? users.map((user) => {
                            return (
                                <div className='profile-display'>
                                    <div className='user-pic'>
                                        <img src='profile-pic.jpg' alt='img'></img>
                                    </div>
                                    <div className='user-name'>
                                        <p>{user.username}</p>
                                    </div>
                                    <div className='user-rank'>
                                        <p>Profile Rank-(A,B,C,D) : {user.rank}</p>
                                        <p>Email Address: {user.email}</p>
                                    </div>
                                </div>

                            )
                        })
                            :
                            <span>No One Join Your Group Yet</span>
                    }
                </div>
                <div>
                    <button onClick={() => deleteGroup(groupId)} className='del-btn'>Delete Group</button>
                </div>
            </div>
        </div>
    )
}

export default OrganizerPage
