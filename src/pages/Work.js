import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import './Work.scss'
import { getWorkItem } from './WorkItems'

export default class Work extends Component {
   
    componentDidMount() {
        this.main.scrollIntoView()
    }
   
    render() {
        return (
            <div ref={el => this.main = el} className='work-container'>
                <Cursor />
                <header>
                    <div className="header-main">
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                            </ul>
                        </nav>

                        <div className="location">
                            India <img src={'https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg'} alt="Indian-flag" />
                        </div>
                    </div>
                </header>

                <WorkMain {...this.props} />
            </div>
        )
    }
}

class WorkMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const { workid } = this.props.match.params
        const workItem = getWorkItem(workid)
        this.setState({
            data: workItem
        })
    }

    render() {
        const { data } = this.state

        if (!data) {
            return null;
        }

        return (
            <div className='workmain-container'>
                <main>
                    <div className="part-1">
                        <h1>{data.title}</h1>
                        <div style={{ backgroundImage: `url(${data.titleImage})` }} className="bg-img"></div>
                        <div className="meta-info">
                            <div className="field">
                                <div className="label">Project Type</div>
                                <div className="value">{data.projectType}</div>
                            </div>
                            <div className="field">
                                <div className="label">Role</div>
                                <div className="value">{data.role}</div>
                            </div>
                        </div>

                        <div className="project-desc">
                            {
                                data.projectDescription.map((obj, i) => (
                                    <p key={i}>{obj}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="part-2">

                        <h1>Gallery</h1>

                        {
                            data.screenshots.map((obj, i) => (
                                <img src={obj} alt="screenshot" key={i} />
                            ))
                        }
                    </div>

                    <Contact className={'work-contact'} />
                </main>

                <Footer />
            </div>
        )
    }
}

