import React, { Component } from 'react'
import './Cursor.scss'

const fontSize = 16;
const cursorDiameter = 2.5;

export default class Cursor extends Component {

    componentDidMount() {
        const ring1 = document.getElementById('ring1')
        const ring2 = document.getElementById('ring2')

        document.addEventListener('mousemove', (e) => {
            ring1.setAttribute('style', `top: ${e.pageY - (fontSize * cursorDiameter) / 2}px; left: ${e.pageX - (fontSize * cursorDiameter) / 2}px;`)
            ring2.setAttribute('style', `top: ${e.pageY - (fontSize * cursorDiameter/2) / 2}px; left: ${e.pageX - (fontSize * cursorDiameter/2) / 2}px;`)
        })
    }

    render() {
        return (
            <>
                <div id='ring1' className="cursor ring1"></div>
                <div id='ring2' className="cursor ring2"></div>
            </>
        )
    }
}
