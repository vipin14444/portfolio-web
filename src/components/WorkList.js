import React, { Component } from 'react'
import './WorkList.scss'
import work2 from '../assets/images/work/work2.webp'
import work5 from '../assets/images/work/work5.png'
import work6 from '../assets/images/work/work6.png'
import work7 from '../assets/images/work/work7.png'

export default class WorkList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workItems: [
                {
                    title: 'iCurious',
                    cardImage: work7,
                    description: 'iCurious: E-Learning Platform'
                },
                {
                    title: 'Ninja',
                    cardImage: work2,
                    description: 'Ninja: Online events tracker'
                },
                {
                    title: 'Indian App Store',
                    cardImage: work5,
                    description: 'Indian App Store: For Indian Apps'
                },
                {
                    title: 'CommitEd',
                    cardImage: work6,
                    description: 'CommitEd: E-Learning Platform'
                },
            ]
        }
    }


    render() {
        const { workItems } = this.state

        return (
            <div className='worklist-cards-container'>
                {
                    workItems.map((item, idx) => {
                        return <WorkCard item={item} key={idx} />
                    })
                }
            </div>
        )
    }
}


class WorkCard extends Component {
    render() {
        const { item } = this.props

        return (
            <div className='work-card-container'>
                <div className="top">
                    <h2>{item.title}</h2>
                    <div style={{ backgroundImage: `url(${item.cardImage})` }} className="bg-img"></div>
                </div>
                <div className="bottom">
                    <div className="desc">{item.description}</div>
                    <div className="more-arrow">More</div>
                </div>
            </div>
        )
    }
}
