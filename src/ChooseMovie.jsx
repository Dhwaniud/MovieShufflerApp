import React, { useCallback, useState } from "react";
import data from "./movies.json";
import Button from "./Components/Button";

export default function ChooseMovie({ movies, handleBackClick }) {
    const [randomMovie, setRandomMovie] = useState(movies[0]);

    const handleShuffle = useCallback(() => {
        const random = Math.floor(Math.random() * movies.length);
        setRandomMovie(movies[random]);
    }, [movies]);

    return (
        <>
            <div>
                <Button
                    variant="secondary"
                    size="small"
                    onClick={handleBackClick}
                >
                    Back
                </Button>
                <p>{randomMovie?.movieName}</p>
                <Button variant="pink" size="medium" onClick={handleShuffle}>
                    Shuffle
                </Button>
            </div>
        </>
    );
}
