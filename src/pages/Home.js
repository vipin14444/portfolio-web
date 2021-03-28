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
                                    <li><Link> <IconLinkedIn /> LinkedIn</Link></li>
                                    <li><Link> <IconGithub /> Github</Link></li>
                                    <li><Link> <IconFacebook /> Facebook</Link></li>
                                    <li><Link> <IconInstagram /> Instagram</Link></li>
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

                        <div className="work-cards-container">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, tempore! Aut incidunt, voluptatum, iste repellat labore asperiores, sit error totam distinctio enim alias. Quam deleniti officia nemo amet repudiandae omnis dicta molestiae iusto soluta incidunt ut voluptas odio nam beatae molestias vel id debitis voluptatem voluptatum facere laudantium, iure neque. Eligendi veniam distinctio reiciendis at error quasi, illo culpa harum aut. Nam odio voluptatem est quisquam facere, accusamus numquam earum fugiat officia minima sit quaerat laudantium velit adipisci similique harum qui fugit corrupti consectetur totam tempore id voluptatibus! Hic aperiam alias magni ex eos quis accusamus porro a quod voluptas. Repellat quibusdam ea possimus perspiciatis, officia velit quasi fugiat cum quae odio dolorum optio fugit officiis, id saepe. Non nisi tempora quo. Perspiciatis, ea. Aperiam dolorem iure impedit perspiciatis, soluta sunt ipsam ipsum sed eligendi suscipit, earum molestias adipisci repellendus eos tenetur accusantium delectus inventore nihil sapiente nemo voluptate voluptatum? Harum deleniti cumque, rerum molestias unde nam iusto, reprehenderit eos magnam architecto excepturi culpa autem, sed expedita minima rem a nemo. Corrupti omnis eligendi aspernatur, eos voluptates, numquam, illum aliquid doloremque sint nobis molestias nulla. Iure, a eaque molestias dicta esse enim eius magnam quibusdam, amet, aperiam rerum ipsam! Fuga dicta, assumenda ad, iusto blanditiis ducimus fugit saepe accusantium obcaecati nulla culpa ex atque maiores aspernatur mollitia cumque eius totam similique perspiciatis! Minima exercitationem officia eveniet? A inventore nulla nemo quaerat beatae! Assumenda, natus impedit. Tempore nisi repudiandae, fuga iste magni aut est molestiae nesciunt inventore saepe iure ipsam ipsa asperiores modi laboriosam cum quam labore itaque doloremque ullam laudantium vel. Exercitationem unde illum perferendis dicta dolorem, magni architecto delectus pariatur accusantium perspiciatis cumque consequatur minima vero deleniti doloremque soluta iste. Officia aperiam laudantium placeat a quod nam debitis, qui accusantium laborum quis excepturi delectus sunt fugit provident dolorum possimus quaerat eligendi voluptate iste minus corrupti mollitia ipsam repellat impedit? Ipsum id dolore natus corrupti, veniam, modi architecto temporibus soluta aspernatur ex exercitationem maiores, minima excepturi illo dolores aliquam culpa possimus veritatis et eligendi dolorem dicta! Odit, dolorum magnam sapiente quos doloremque culpa. Quaerat, perspiciatis distinctio saepe tempore odit beatae iusto voluptatem. Vero suscipit tenetur ducimus eos, tempora quasi, quod nihil voluptates natus ipsam quos aliquid quia repellendus cumque minus quam totam soluta non, blanditiis perferendis repudiandae? Voluptates odit sint eos. Tempore, officiis inventore perspiciatis corporis quidem quae ipsum doloribus vitae sed odio, necessitatibus fugit maxime repellat ducimus reprehenderit similique!
                        </div>
                    </section>

                    <section id='contact' className="contact">

                        <h2 className="h-lg uppercase">Like my work? Want to get in touch with me?</h2>

                        <div className="contact-link">✉️ vipin.sharma3039@gmail.com</div>
                        <div className="contact-link">📱 +91-9716753039</div>
                    </section>

                </div>

                <footer>
                    <div className="footer-main">
                        Made with ❤️ by Vipin Sharma
                    </div>
                </footer>
            </div>
        )
    }
}
