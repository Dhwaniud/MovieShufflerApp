import React, { useCallback, useState } from "react";
import data from "./movies.json";

export default function ChooseMovie({ movies, handleBackClick }) {
    const [randomMovie, setRandomMovie] = useState(movies[0]);

    const handleShuffle = useCallback(() => {
        const random = Math.floor(Math.random() * movies.length);
        setRandomMovie(movies[random]);
    }, [movies]);

    return (
        <>
            <div>
                <button onClick={handleBackClick}>Back</button>
                <p>{randomMovie?.movieName}</p>
                <button onClick={handleShuffle}>Shuffle</button>
            </div>
        </>
    );
}
