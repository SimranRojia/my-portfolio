import React from 'react'
import './totop.scss'
import { useDispatch } from 'react-redux'
import { scrollToTop } from '../../redux/slices/utilsSlice'



function Totop() {
    const dispatch = useDispatch()
    function scrollTop() {
        dispatch(scrollToTop())
    }


    return (
        <div onClick={scrollTop} className="totop">
            <div className="arrow-div">
                <i className="uil uil-top-arrow-to-top"></i>

            </div>

        </div>
    )
}

export default Totop
