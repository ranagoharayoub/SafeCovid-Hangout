import React from 'react'
import './JoinGroup.css'
import { Link } from 'react-router-dom'

function JoinGroup() {
    return (
        <div className='join-cont'>
            <div className='join-upper'>
                    <Link  to='/' ><button className='back-btn'>Back</button></Link>
                    <p className='join-title'>Join a Group</p>
                    <Link  to='/' ><button className='back-btn'>Create a Group</button></Link>
            </div>
            <div className='join-lower'>
                <div className='join-left-cont'>
                    <div className='group'>
                        <div className='group-pic'>
                            <img src='/Event.png' alt='img'></img>
                        </div>
                        <div className='join-org-btn'>
                            <button className='join-btn'>Join</button>
                            <button className='org-login'>Organizer Login</button>
                        </div>
                    </div>
                    <div className='event'>
                        <p>Event-1 <br></br> Moderator:</p>
                    </div>
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
                        <p>Event-2<br></br> Moderator:</p>
                    </div>
                </div>
                <div className='join-right-cont'>
                    <div className='group'>
                            <div className='group-pic'>
                                <img src='/Event.png' alt='img'></img>
                            </div>
                            <div className='join-org-btn'>
                                <button className='join-btn'>Join</button>
                                <button className='org-login'>Organizer Login</button>
                            </div>
                        </div>
                        <div className='event'>
                            <p>Event-1<br></br> Moderator:</p>
                        </div>
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
                            <p>Event-2<br></br> Moderator:</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default JoinGroup
