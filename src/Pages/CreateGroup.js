import React, { useEffect, useContext, useState } from 'react';
import './JoinGroup.css';
import { ConfidentialContext } from '../Context/Context';
import ApiClient from '../CommonMethods/APIHandle';


import { useHistory } from "react-router-dom";

function CreateGroup() {
    const { value, setValue } = useContext(ConfidentialContext);
    const [groups, setGroups] = useState(null);

    let history = useHistory()

    console.log(value, '..value')

    useEffect(() => {

        const apiUrl = `http://localhost:3090/group/${value.userId}`;

        ApiClient.sendGetGroup(apiUrl, (res) => {
            if (res.data) {
                console.log('Create-Groups', res)
                setGroups(res.data.groupsOwned)
            }
            else {
                console.log(res)
            }
        })
    }, [])

    useEffect(() => {
        console.log(groups, 'groups')
    }, [groups])

    const showGroupDetail = (id) => {
        history.push(`/organize/${id}`)
    }
    return (
        <div className='join-cont'>
            <div className='join-upper' style={{ display: 'flex', justifyContent: 'center' }}>
                <p className='join-title' style={{ textAlign: 'center' }} >All Created Groups</p>
            </div>
            <div className='grid' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {groups ? groups.map((group) => (
                    <div onClick={() => showGroupDetail(group._id)} className='join-right-cont' >
                        <div className='group'>
                            <div className='group-pic' >
                                <img src='/Event.png' alt='img'></img>
                            </div>
                            <div className='join-org-btn'>
                                <button className='join-btn'>Join</button>
                                <button className='org-login'>Organizer Login</button>
                            </div>
                        </div>
                        <div className='event'>
                            <p>{group.groupName}</p>
                        </div>
                    </div>
                ))
                    :
                    <div>No Groups Created</div>

                }

            </div>
        </div>
    )
}

export default CreateGroup
