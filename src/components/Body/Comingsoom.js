import React from 'react'
import './body.css';
import comingsoonDatas from '../movielist/movie-comingsoon.json';
import { useSelector } from 'react-redux';

function Comingsoom() {
        const lightToggle = useSelector(state => state.lightToggle)
        const comingsoonData = comingsoonDatas.map(comingsoonData => comingsoonData)
        console.log(comingsoonData)
        return (
            <div className={lightToggle? "body-black" : "body-white" }>
                <h1>comingsoonData</h1>
            </div>
        )
}

export default Comingsoom
