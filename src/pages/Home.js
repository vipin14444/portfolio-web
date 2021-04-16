import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import me from '../assets/images/me.png'
import { ReactComponent as IconLinkedIn } from '../assets/icons/linkedin.svg'
import { ReactComponent as IconGithub } from '../assets/icons/github.svg'
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg'
import { ReactComponent as IconInstagram } from '../assets/icons/instagram.svg'
import SkillList from '../components/SkillList'
import ScrollIcon from '../components/ScrollIcon'
import StaggeredImages from '../components/StaggeredImages'
import Cursor from '../components/Cursor'
import WorkList from '../components/WorkList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default class Home extends Component {

    scrollToView = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }

    render() {
        return (
            <div className='home-container'>

                <Cursor />

                <StaggeredImages />

                <div className="hero">
                    <div className="hero-main">
                        <h1>Vipin Sharma</h1>
                        <h2>
                            Web Developer
                            <div className="scroll-icon-wrapper">
                                <ScrollIcon />
                            </div>
                        </h2>
                    </div>
                </div>

                <header>
                    <div className="header-main">
                        <nav>
                            <ul>
                                <li><Link onClick={(e) => { this.scrollToView('work') }}>Work</Link></li>
                                <li><Link onClick={(e) => { this.scrollToView('about') }}>About</Link></li>
                                <li><Link onClick={(e) => { this.scrollToView('contact') }}>Contact</Link></li>
                            </ul>
                        </nav>

                        <div className="location">
                            India <img src={'https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg'} alt="Indian-flag" />
                        </div>
                    </div>
                </header>

                <div className="wrapper">

                    <section id='about' className='personal'>

                        <div className='my-image-container'>
                            <img className='my-image' src={me} alt="me, lol" />
                        </div>

                        <div className="side-info">

                            <div className="part">
                                <h2 className='h-md uppercase'>
                                    Hey there!
                                </h2>
                                <p>
                                    Hi, I'm Vipin Sharma, from Gurgaon, Haryana, India. I am currently working as a web developer and freelancer (also looking for interesting job offers).
                                </p>
                            </div>

                            <div className="part social">
                                <h2 className='h-sm uppercase'>
                                    Social Media
                                </h2>

                                <ul>
                                    <li><Link className='icon-linkedin'> <IconLinkedIn /> LinkedIn</Link></li>
                                    <li><Link className='icon-github'> <IconGithub /> Github</Link></li>
                                    <li><Link className='icon-facebook'> <IconFacebook /> Facebook</Link></li>
                                    <li><Link className='icon-instagram'> <IconInstagram /> Instagram</Link></li>
                                </ul>
                            </div>

                        </div>

                    </section>

                    <section className="skills">

                        <h2 className="h-lg uppercase">Skills</h2>

                        <SkillList />

                    </section>

                    <section id='work' className="work">

                        <h2 className="h-lg uppercase">It ain't much, but it's honest work</h2>

                        <WorkList />

                    </section>

                    <Contact />

                </div>

                <Footer />
            </div>
        )
    }
}
