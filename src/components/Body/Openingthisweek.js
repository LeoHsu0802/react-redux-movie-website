import React from 'react'
import './pagebody.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import movieDatas from '../movielist/movie-openingthisweek.json';
import { useSelector } from 'react-redux';

function Comingsoom() {
        const lightToggle = useSelector(state => state.lightToggle)
        const searchMovie = useSelector(state => state.searchMovie)
        //正則中文判斷
        const CHINESE = new RegExp("^[\u4E00-\u9FFF]+$")
        //判斷查詢輸入是否為中文，若是中文則使用中文電影名來filter，否則使用英文電影名來filter
        //統一影名英文小寫，方便比對
        const filterMovies = (CHINESE.test(searchMovie)? 
        movieDatas.filter(movies => {return movies.ch_name.indexOf(searchMovie) !== -1 }):
        movieDatas.filter(movies => {return movies.eng_name.toLowerCase().indexOf(searchMovie) !== -1 })
        )

        return (
            <div className={lightToggle? "body-black" : "" }>
                <Carousel>
                    {movieDatas.map(movieData =>(
                        <Carousel.Item key={movieData.movie_id}>
                            <a href={movieData.trailer_url}>              
                                <img
                                className="d-block w-10"
                                src={movieData.poster_url}
                                alt={movieData.ch_name}
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                    </Carousel>
                <Container>     
                <Row>
                {filterMovies.map(movieData =>(
                        <Col lg={2} md={3} key={movieData.movie_id}>
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
