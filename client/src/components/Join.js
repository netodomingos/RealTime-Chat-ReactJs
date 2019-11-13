import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')



    return (
        <div className='join-container'>
            <div className='joinInner-container'>
                <h3>RealTime</h3>
                <h3>ReactJs-Chat</h3>
                <div className='heading'>
                    <div>
                        <input placeholder='Seu nome' className='nameInput' type='text' onChange={(event) => setName(event.target.value)} />
                        <input placeholder='Sua sala' className='roomInput' type='text' onChange={(event) => setRoom(event.target.value)} />
                        <Link>
                            <button className='button' type='submit'>Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join