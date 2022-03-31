import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"

const data = [
    "./sale.jpg",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "./sale2.jpg",
    "./sale3.jpg",
    "./sale6.gif"
]

const Banner = () => {
  return (
    <Carousel 
    className='carousel'
    autoPlay ={true}
    animation = 'slide'
    indicators={false}
    cycleNavigation = {true}
    >
        {
            data.map((imag,i)=>{
                return (
                    <img src={imag} alt="" className='banner_img' key={"uniqueid1"} />
                )
            })
        }
    </Carousel>
  )
}

export default Banner