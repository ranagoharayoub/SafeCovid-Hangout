import React from 'react'
import './Rank.css'

function Rank({rank}) {
    return (
        <div className='rank-cont'>
            <div className='rank-title'>
                <p>Rank Assigned</p>
            </div>
            <div className='rank-risk'>
                <p>Your Risk Rank <b>{`"${rank}"`}</b></p>
                <p>Acceptable Activities Below (all applicable categories listed)</p>
            </div>
            <div className='activity-cont'>
                <div className='allowed-activity'>
                    <div className='picture-title'>
                        <div className='pic-double'>
                            <div className='rank-pic'>
                                <img src='/hikinh.png' alt='activity'></img>
                            </div>
                            <div className='rank-pic-title'>
                                <p>Hiking/Walking <br></br>suitable for rank A-D</p>
                            </div>
                        </div>
                        <div className='pic-double'>
                            <div className='rank-pic'>
                                <img src='/outdoor.png' alt='activity'></img>
                            </div>
                            <div className='rank-pic-title'>
                            <p>Outdoor Dining <br></br> suitable for ranks A-C</p>
                            </div>
                        </div>    
                    </div>
                    <div className='picture-title'>
                        <div className='pic-double'>
                            <div className='rank-pic'>
                                <img src='/game-timing.png' alt='activity'></img>
                            </div>
                            <div className='rank-pic-title'>
                                <p>Game Night/House Dinner <br></br> suitable for rank A-B</p>
                            </div>
                        </div>
                        <div className='pic-double'>
                            <div className='rank-pic'>
                                <img src='/indoor.png' alt='activity'></img>
                            </div>
                            <div className='rank-pic-title'>
                                <p>Indoor Dining/Movie <br></br> Suitable for rank A</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank
