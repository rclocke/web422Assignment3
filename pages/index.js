/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ryan Locke Student ID: 034748129 Date: October 11, 2022
*
*
********************************************************************************/ 

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination} from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';
import { Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'react-bootstrap';

const fetcher = (...args) => fetch(...args).then((res) => res.json()); 

export default function Home() {

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState();
  const { data, error } = useSWR(`https://ill-cyan-rattlesnake-belt.cyclic.app/api/movies?page=${page}&perPage=10`,fetcher);

  useEffect(() => {
    if (data) {
      setPageData(data);
      console.log(data)
    }
  }, [data]);

  function previous(){
    if(page > 1){
      setPage((prev) => prev - 1);
    }
  }

  function next(){
    setPage((prev) => prev + 1);
  }

  const renderAccordion = (movie, index)=>{
    const accordion =  
    <Accordion>
        {pageData.map(movie =>(
      <Accordion.Item eventKey={movie._id} Key={movie._id}>
        <Accordion.Header><p><strong>{movie.title}</strong> ({movie.year} : Directed by {movie.directors})</p></Accordion.Header>
        <Accordion.Body>
        <MovieDetails movie ={movie} />
        </Accordion.Body>
      </Accordion.Item>
       ))}
    </Accordion>
   
    return accordion
  }
 
  if(pageData){
    return (
      <>
      <PageHeader text = "Film Collection : Sorted by Date"/> 

        {renderAccordion()}

        <Pagination>
        <Pagination.Prev onClick={(event, page) => previous()}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={(event, page) => next()}/>
        </Pagination>
      </>
    )
  }
  else{
    return null;
  }
 
}


