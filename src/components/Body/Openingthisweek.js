import React from 'react'
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import movieDatas from '../movielist/movie-openingthisweek.json';
import { useSelector } from 'react-redux';

function Comingsoom() {
        const lightToggle = useSelector(state => state.lightToggle)
  
        return (
            <div className={lightToggle? "body-black" : "body-white" }>
                    <Carousel>
                    {movieDatas.map(movieData =>(
                        <Carousel.Item>
                            <a href={movieData.trailer_url}>
                                <img
                                className="d-block w-10"
                                src={movieData.poster_url}
                                alt={movieData.ch_name}
                                id={movieData.movie_id}
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                    </Carousel>
            <Container>     
                <Row>
                {movieDatas.map(movieData =>(
                        <Col lg={2} md={3}>
                            <a href={movieData.trailer_url}>
                                <img
                                src={movieData.poster_url}
                                alt={movieData.ch_name}
                                />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        )
}

export default Comingsoom
