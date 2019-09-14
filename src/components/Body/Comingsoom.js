import React from 'react'
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import movieDatas from '../movielist/movie-comingsoon.json';
import { useSelector } from 'react-redux';

function Comingsoom() {
        const lightToggle = useSelector(state => state.lightToggle)
        //const comingsoonData = comingsoonDatas.map(comingsoonData => comingsoonData)
        //console.log(comingsoonData)
        return (
            <div className={lightToggle? "body-black" : "body-white" }>
                    <Carousel>
                    {movieDatas.map(movieData =>(
                        <Carousel.Item>
                            <img
                            className="d-block w-10"
                            src={movieData.poster_url}
                            alt={movieData.ch_name}
                            />
                        </Carousel.Item>
                    ))}
                    </Carousel>

            <Container>     
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
        )
}

export default Comingsoom
