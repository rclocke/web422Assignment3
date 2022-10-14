import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '../../components/MovieDetails';
import Error from 'next/error';
import PageHeader from '../../components/PageHeader';

const Movie = () =>{
    const router = useRouter();
    const { title } = router.query;

    const { data, error } = useSWR(`https://ill-cyan-rattlesnake-belt.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

    if(data){
        if(data.length){
            return(
                <>
                {data.map(movie =>(
                    <div Key={movie._id}>
                        <PageHeader text={title} />
                        <MovieDetails movie={movie} />
                    </div>
                ))}
                </>
            )    
        }
        else
        {
            return <Error statusCode={404} /> 
        } 
    }
    else
    {

        return null;
    }
}

export default Movie;