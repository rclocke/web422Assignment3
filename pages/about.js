import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

export async function getStaticProps(context) {
  
    const res = await fetch(`https://ill-cyan-rattlesnake-belt.cyclic.app/api/movies/573a13b9f29313caabd4ddff`)
    const data = await res.json()
  
    return { props: { movie: data } }
  }
  
const About = (props) =>{

    const element = <Image src={props.movie.poster} className='img-fluid' alt='Movie Poster'/>;
    return (
        <>
        <PageHeader text = "About the Developer : Ryan Locke"/> 
        <Card  className="bg-light">
        <Card.Body>
        <p>Ryan Locke is a student currently enrolled in the CPA program at Seneca college.</p>
        <p>This webpage is a fourth semester project designed for the WEB422 class.</p>
        <p>Ryan Locke has aspirations to become a proffessional web developer. Other interests include listening to music, 
            snowboarding and going to concerts.</p>
        <p>There are alot of great movies to choose from, but <Link href="/movies/Interstellar">Interstallar</Link>(2014) is probably 
            my favourite</p>
        </Card.Body>
        <MovieDetails movie={props.movie} />	 
        </Card>
        <br />
        </>
    )
}

export default About;