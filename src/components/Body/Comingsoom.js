import React, { Component } from 'react'
import './body.css';
import comingsoonDatas from '../movielist/movie-comingsoon.json';

export class Comingsoom extends Component {

    render() {
        const comingsoonData = comingsoonDatas.map(comingsoonData => comingsoonData)
        console.log(comingsoonData.poster_url)
        return (
            <div className="pg-body">
                <h1>Comingsoom</h1>
            </div>
        )
    }
}

export default Comingsoom
