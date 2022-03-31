import React, { useEffect } from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide'
import { getProducts } from '../redux/actions/action'
import { useDispatch, useSelector } from "react-redux"

const Maincomp = () => {

    const { products } = useSelector(state => state.getproductsdata)
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <div className='home_section'>
                <div className="banner_part">
                    <Banner />
                </div>
                <div className='slide_part'>
                    <div className="left_slide">
                        <Slide title="Deals Of the day" products={products} />
                    </div>
                    <div className="right_slide">
                        <h5> Festive Latest Launches</h5>
                        <img src="./home.jpg" alt="rightimg" />
                        <a href="#">See more</a>
                    </div>
                </div>
                <Slide title="Todays Deal" products={products} />
                <div className="center_img">
                    <img src="./center.jpg" alt="" />
                </div>
                <Slide title="Best Deals" products={products} />
                <Slide title="Upto 80% off" products={products} />
            </div>
        </>
    )
}

export default Maincomp