import React, { Component } from 'react'
import './StaggeredImages.scss'
import trail1 from '../assets/images/trail/trail1.webp'
import trail2 from '../assets/images/trail/trail2.webp'
import trail3 from '../assets/images/trail/trail3.webp'
import trail4 from '../assets/images/trail/trail4.webp'
import trail5 from '../assets/images/trail/trail5.webp'
import trail6 from '../assets/images/trail/trail6.webp'
import _ from 'lodash'

let imagesList = [trail1, trail2, trail3, trail4, trail5, trail6]
const setImages = () => {
    let arr = []
    let newImageList = _.clone(imagesList)
    arr.push(getImage(newImageList))
    arr.push(getImage(newImageList))
    arr.push(getImage(newImageList))
    arr.push(getImage(newImageList))
    arr.push(getImage(newImageList))
    arr.push(getImage(newImageList))
    return arr
}

const getImage = (newImageList) => {
    let idx = Math.ceil(Math.random() * newImageList.length) - 1
    let img = newImageList[idx]
    newImageList.splice(idx, 1)
    return img;
}

export default class StaggeredImages extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imagesMain: setImages()
        }
    }

    componentDidMount() {
        const img1 = document.querySelector('.img1')
        const img2 = document.querySelector('.img2')
        const img3 = document.querySelector('.img3')
        const img4 = document.querySelector('.img4')
        const img5 = document.querySelector('.img5')
        const img6 = document.querySelector('.img6')

        document.addEventListener('mousemove', e => {
            img1.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
            img2.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
            img3.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
            img4.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
            img5.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
            img6.setAttribute('style', `top: ${e.pageY - 210}px; left: ${e.pageX - 140}px`)
        })
    }

    render() {
        const { imagesMain } = this.state
        return (
            <div className='staggered-images-container'>
                <img className='img img1' src={imagesMain[0]} alt="trail1" />
                <img className='img img2' src={imagesMain[1]} alt="trail2" />
                <img className='img img3' src={imagesMain[2]} alt="trail3" />
                <img className='img img4' src={imagesMain[3]} alt="trail4" />
                <img className='img img5' src={imagesMain[4]} alt="trail5" />
                <img className='img img6' src={imagesMain[5]} alt="trail6" />
            </div>
        )
    }
}
