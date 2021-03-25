import React from 'react'
import { Link } from 'react-router-dom'
import './Activity.css'

function Activity() {
    return (
        <div className='acitvity-cont'>
        <div className='risk-upper'>
                    <Link  to='/' ><button className='back-btn'>Back</button></Link>
                    <p className='risk-title'>Moderator Selects an Activity</p>
                    <div></div>
            </div>
        <div className='join-lower'>
            <div className='join-left-cont'>
                <div className='group'>
                    <div className='group-pic'>
                        <img src='/hikinh.png' alt='activity'></img>
                    </div>
                </div>
                <div className='join-activity-btn'>
                    <button>Hiking/Wale: Suitable for rank A-D</button>
                </div>
                <div className='group'>
                    <div className='group-pic' >
                        <img src='/outdoor.png' alt='activity'></img>
                    </div>
                </div>
                <div className='join-activity-btn'>
                    <button>Outdoor Dining: Suitable for rank A-C</button>
                </div>
            </div>
            <div className='join-right-cont'>
                <div className='group'>
                        <div className='group-pic'>
                            <img src='/game-timing.png' alt='activity'></img>
                        </div>
                    </div>
                    <div className='join-activity-btn'>
                        <button>Game Night/House Dinner: Suitable for rank A-B</button>
                    </div>
                    <div className='group'>
                        <div className='group-pic' >
                            <img src='/indoor.png' alt='activity'></img>
                        </div>
                    </div>
                    <div className='join-activity-btn'>
                        <button>Indoor Dining/Movie: Suitable for rank A-D</button>
                    </div>
            </div>
        </div>
    </div>
    )

}

export default Activity
