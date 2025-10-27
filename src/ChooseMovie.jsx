import React from "react";
import data from "./movies.json";

export default function ChooseMovie({ movies, handleBackClick }) {
    return (
        <>
            <div>
                <button onClick={handleBackClick}>Back</button>
                {movies?.map((movie) => (<p key={movie.movieName}>
                    {movie.movieName}
                </p>))}
                <button>Shuffle</button>
            </div>
        </>
    );
}
