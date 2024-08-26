import { Movie } from './Movie';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "./global"

export function MovieList() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch(`${API}/movies`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMovieList(mvs));
    };


    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`${API}/movies/${id}`, {
            method: "DELETE",
        })
            .then((data) => getMovies());
    };

    const navigate = useNavigate();


    return (
        // <div className='movie-list'>
        //     {movieList.map((mv, index) => (
        //         <Movie key={index} movie={mv} />))}
        // </div>
        <div>
            <div className='movie-list'>
                {movieList.map((mv) => (
                    <div key={mv._id}>
                        <Movie movie={mv} id={mv._id}
                            deleteButton={<IconButton
                                color='error'
                                sx={{ marginLeft: "auto" }}
                                onClick={() => deleteMovie(mv._id)}
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>}
                            editButton={<IconButton
                                color='primary'
                                style={{ marginLeft: "auto" }}
                                onClick={() => navigate(`/movie/edit/${mv._id}`)}
                                aria-label="delete">
                                <EditIcon />
                            </IconButton>} />
                    </div>
                ))}
            </div>
        </div>
    );
}