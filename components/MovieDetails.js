import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieDetails = (props) =>{
    
    return (
        
        <Container>
            <Row>
            {props.movie.poster ? <Col md><Image src={props.movie.poster} alt="poster" className="w-100" /><br /><br /></Col> : null}
             <Col><strong>Directed by:</strong> {props.movie.directors.join(', ')}<br /><br />
                    {props.movie.fullplot}<br /><br />
                    <strong>Cast:</strong> {props.movie.cast ? props.movie.cast.join(', ') : 'N/A'}<br /><br />
                    <strong>Awards:</strong> {props.movie.awards.text}<br /><br />
                    <strong>IMDB Rating:</strong> {props.movie.imdb.rating} ({props.movie.imdb.votes} votes)<br /><br /></Col>   
            </Row>
        </Container>
    )
}

export default MovieDetails;