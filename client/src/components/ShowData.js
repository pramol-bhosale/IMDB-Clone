import React, { useState, useEffect } from 'react'
import Axios from 'axios'
function ShowData() {
    const [movieData, setMovieData] = useState([])

    const deleteMovie = (Movie_id) => {
        Axios.delete(`http://localhost:3001/movies/${Movie_id}`).then(
            window.location.reload()
        );
    }
    useEffect(() => {
        Axios.get("http://localhost:3001/movies").then((response) => {

            setMovieData(response.data)
        })
    }, []);
    return (
        <div className="row mt-3">
            {movieData.map((val) => {
                return (

                    <div className="col-4" key={val.Movie_id}>
                       <div className="border rounded-2 m-3 p-4">
                            <div className="mb-2">
                                <span className="fw-bolder">Name: </span>
                                <span>{val.Name}</span>
                            </div>

                            <div className="mb-2">
                                <span className="fw-bolder">Year of Release: </span>
                                <span>{val["Year of Release"]}</span>

                            </div>
                            <span className="fw-bolder">Plot: </span>
                            <span>{val.Plot}</span>
                            <hr />
                         
                            <button className="btn btn-outline-danger" onClick={() => { deleteMovie(val.Movie_id) }}>Delete</button>

                        </div>

                    </div>

                )
            })}
        </div>
    )

}
export default ShowData