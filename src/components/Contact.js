import React, { Component } from 'react'
import './Contact.scss'

export default class Contact extends Component {
    render() {
        return (
            <section id='contact' className={`contact ${this.props.className ? this.props.className : ''}`}>

                <h2 className="h-lg uppercase">Like my work? Want to get in touch with me?</h2>

                <div className="contact-link">✉️ vipin.sharma3039@gmail.com</div>
                <div className="contact-link">📱 +91-9716753039</div>
            </section>
        )
    }
}
