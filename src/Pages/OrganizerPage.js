import React from 'react'
import { Link } from 'react-router-dom'
import './OrganizerPage.css'

function OrganizerPage() {
    return (
        <div className='join-cont'>
            <div className='risk-upper'>
                    <Link  to='/' ><button className='back-btn'>Back</button></Link>
                    <p className='risk-title'>Game Night: Organizer Page</p>
                    <div></div> 
            </div>
            <div className='profile-cont'>
                <div className='profile-center'>
                    <div className='profile-display'>
                        <div className='user-pic'>
                            <img src='profile-pic.jpg' alt='img'></img>
                        </div>
                        <div className='user-name'>
                            <p>User Name</p>
                        </div>
                        <div className='user-rank'>
                            <p>Profile Rank-(A,B,C,D)</p>
                            <p>Email Address:</p>
                        </div>
                    </div>
                    <div className='profile-display'>
                        <div className='user-pic'>
                            <img src='profile-pic.jpg' alt='img'></img>
                        </div>
                        <div className='user-name'>
                            <p>User Name</p>
                        </div>
                        <div className='user-rank'>
                            <p>Profile Rank-(A,B,C,D)</p>
                            <p>Email Address:</p>
                        </div>
                    </div>
                    <div className='profile-display'>
                        <div className='user-pic'>
                            <img src='profile-pic.jpg' alt='img'></img>
                        </div>
                        <div className='user-name'>
                            <p>User Name</p>
                        </div>
                        <div className='user-rank'>
                            <p>Profile Rank-(A,B,C,D)</p>
                            <p>Email Address:</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='del-btn'>Delete Group</button>
                </div>
            </div>
    </div>
    )
}

export default OrganizerPage
