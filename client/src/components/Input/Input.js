import React from 'react'

import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <div>
            <form className='form'>
                <input
                    className='input-container'
                    type='text'
                    placeholder='Type a message...'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <div>
                    <button className='sendButton' onClick={(event) => sendMessage(event)}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Input