import React, { Component } from 'react'
import './SkillList.scss'
import { ReactComponent as IconHtml } from '../assets/icons/html.svg'
import { ReactComponent as IconCss } from '../assets/icons/css.svg'
import { ReactComponent as IconSass } from '../assets/icons/sass.svg'
import { ReactComponent as IconJs } from '../assets/icons/js.svg'
import { ReactComponent as IconJQuery } from '../assets/icons/jquery.svg'
import { ReactComponent as IconReact } from '../assets/icons/react.svg'
import { ReactComponent as IconNodejs } from '../assets/icons/nodejs.svg'
import { ReactComponent as IconDotnetCore } from '../assets/icons/core.svg'
import { ReactComponent as IconSQL } from '../assets/icons/db.svg'
import { ReactComponent as IconNoSql } from '../assets/icons/mongodb.svg'

export default class SkillList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    name: 'HTML',
                    icon: <IconHtml />,
                },
                {
                    name: 'CSS',
                    icon: <IconCss />,
                },
                {
                    name: 'SASS',
                    icon: <IconSass />,
                },
                {
                    name: 'Javascript',
                    icon: <IconJs />,
                },
                {
                    name: 'Jquery',
                    icon: <IconJQuery />,
                },
                {
                    name: 'React JS',
                    icon: <IconReact />,
                },
                {
                    name: 'Node JS',
                    icon: <IconNodejs />,
                },
                {
                    name: 'Dotnet Core',
                    icon: <IconDotnetCore />,
                },
                {
                    name: 'SQL',
                    icon: <IconSQL />,
                },
                {
                    name: 'No-SQL',
                    icon: <IconNoSql />,
                },
            ]
        }
    }


    render() {
        const { data } = this.state

        return (
            <ul className='skill-list'>
                {
                    data.map((item, idx) => {
                        return <Skill key={idx} item={item} />
                    })
                }
            </ul>
        )
    }
}

class Skill extends Component {

    constructor(props) {
        super(props)

        this.state = {
            css: ''
        }
    }


    addMakeSmallClass = () => {
        this.setState({
            css: 'move-to-right'
        })
    }

    removeMakeSmallClass = () => {
        this.setState({
            css: ''
        })
    }

    render() {
        const { name, icon } = this.props.item
        const { css } = this.state

        const dataIcon = name.replace(' ', '').toUpperCase()

        return (
            <li data-icon={dataIcon} className={`skill-one`} onMouseOver={this.addMakeSmallClass} onMouseLeave={this.removeMakeSmallClass}>
                <div className={`name ${css}`}>{name}</div>
                <div className="name-mask">{name}</div>
                {icon}
            </li>
        )
    }
}
