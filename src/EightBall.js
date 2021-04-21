import React, { useState } from 'react';
import './EightBall.css'
import answers from './answers'

const EightBall = () => {
    const randomChoice = () => answers[(Math.floor(Math.random() * answers.length))]
    const askQuestion = () => {
        let choiceData = randomChoice()
        setText(choiceData.msg)
        setColor(choiceData.color)
    }

    const [color, setColor] = useState('black')
    const [text, setText] = useState('Ask a question...')
    return (
        <div className="EightBall" onClick={askQuestion} style={{backgroundColor: color}}>
            <p className="EightBall-textarea">{text}</p>
        </div>

    )
}

export default EightBall