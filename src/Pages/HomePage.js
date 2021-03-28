import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'
import SignIn from '../Components/SignIn'

function HomePage() {
    return (
        <div className='home-cont'>
            <div className='upper-cont'>
                <div className='empty'>

                </div>
                <div className='center-img'>
                    <div className='title'>
                        <p>Welcome to ExpandoPod!</p>
                    </div>
                    <div className='home-img'>
                        <img src='/front-image.png' alt='img'></img>
                    </div>
                </div>
                <div className='signin'>
                    <SignIn></SignIn>
                </div>
            </div>
            <div className='lower-cont'>
                <div className='lower-title'>
                    <p>Making Covid-Safe Scheduling a Breeze</p>
                </div>
                <div className='lower-img'>
                    <div className='img-title'>
                        <div className='people-img'>
                            <img src='/people.png' alt='img'></img>
                        </div>
                        <div className='lower-img-btn'>
                            <Link to='/risk'>
                            <button className='lower-btn'>Assess my risk</button>
                            </Link>
                        </div>
                    </div>
                    <div className='arrow'>
                        <ArrowForward style={{background:'black', fontSize: '40', borderRadius:'50%', color: 'white'}}></ArrowForward>
                    </div>
                    <div className='img-title'>
                        <div className='people-img'>
                            <img src='/risk.png' alt='img'></img>
                        </div>
                        <div className='lower-img-btn'>
                            <Link to='/group'>
                                <button className='lower-btn'>Join a group</button>
                            </Link>
                        </div>
                    </div>
                    <div className='arrow'>
                        <ArrowForward style={{background:'black', fontSize: '40', borderRadius:'50%', color: 'white'}}></ArrowForward>
                    </div> <div className='img-title'>
                        <div className='people-img'>
                            <img src='/activity.png' alt='img'></img>
                        </div>
                        <div className='lower-img-btn'>
                            <Link to='/organize'>
                                <button className='lower-btn'>Activity Assigned</button>
                            </Link>
                        </div>
                    </div>
                    <div className='arrow'>
                        <ArrowForward style={{background:'black', fontSize: '40' ,borderRadius:'50%', color: 'white'}}></ArrowForward>
                    </div> <div className='img-title'>
                        <div className='people-img'>
                            <img src='/schedule.png' alt='img'></img>
                        </div>
                        <div className='lower-img-btn'>
                            <Link to='/activity'>
                                <button className='lower-btn'>Scheduling</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
