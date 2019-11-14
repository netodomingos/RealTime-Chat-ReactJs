import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Chat from './images/chat.svg'
import Networking from './images/networking.png'
import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')



    return (
        <div className='join-container'>
            <div className='img'>
                <img src={Networking} alt='networking' />
            </div>
            <div className='login-container'>
                <form>
                    <img className='chat' src={Chat} alt='chat' />
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
                        <Link to={`/Chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null}>
                            <input type='submit' className='btn' value='Sign In'/>
                        </Link>
                </form>
            </div>
        </div >
    )
}

export default Join