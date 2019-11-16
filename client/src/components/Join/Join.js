import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Chat from './images/chat.svg'
import Networking from './images/networking.png'
import Wave from './images/w.png'
import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')



    return (
        <div>

            <img src={Wave} className='wave' alt='wave' />
            <div className='join-container'>
                <div className='img'>
                    <img src={Chat} alt='networking' />
                </div>
                <div className='login-container'>
                    <form>
                        <img className='chat' src={Networking} alt='chat' />
                        <h2>Welcome</h2>
                        <div className='input-div one focus'>
                            <div className='username-container'>
                                <h5>Username</h5>
                                <input className='input' type='text' onChange={(event) => setName(event.target.value)} />
                            </div>
                        </div>
                        <div className='input-div two focus'>
                            <div className='comunity-container'>
                                <h5>Comunity</h5>
                                <input className='input' type='text' onChange={(event) => setRoom(event.target.value)} />
                            </div>
                        </div>
                        <Link to={`/Chat?name=${name}&room=${room}`} style={{ textDecoration: 'none' }} onClick={event => (!name || !room) ? event.preventDefault() : null}>
                            <button type='submit' className='btn'>Sign In</button>
                        </Link>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Join