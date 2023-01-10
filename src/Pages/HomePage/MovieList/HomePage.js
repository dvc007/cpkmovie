import React, { useEffect, useState } from 'react'
import { getMovie } from '../../../service/MovieService';
import MovieTab from '../MovieTab/MovieTab';
import ListMovie from './ListMovie';

export default function HomePage() {

    const [movie, setMovie] = useState([])
    useEffect(() => {
        getMovie()
            .then((result) => {
                // console.log(result.data.content);
                setMovie(result.data.content);

            }).catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <div>

            <ListMovie movie={movie} />
            <MovieTab />

        </div>
    )
}
