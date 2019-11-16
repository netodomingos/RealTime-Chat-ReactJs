import React from 'react'
import { Link } from 'react-router-dom'

import './ChatHeader.css'

import onlineIcon from './icons/onlineIcon.png'
import closeIcon from './icons/closeIcon.png'

const ChatHeader = ({ room }) => {
    return (
        <div className='chatheader'>
            <div className='leftInnerContainer'>
                <img src={onlineIcon} alt='Online' />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <Link to='/'>
                    <img src={closeIcon} alt='Close' />
                </Link>

            </div>
        </div>
    )
}

export default ChatHeader