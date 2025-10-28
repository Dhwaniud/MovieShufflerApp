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
            <div className="min-h-screen bg-gray-800 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative">
                    <Button
                        variant="secondary"
                        size="small"
                        onClick={handleBackClick}
                    >
                        Back
                    </Button>
                </div>
                <div>
                    <div className="relative p-4 text-white text-xs">
                        <img src={randomMovie?.image}/>
                    </div>
                    <div className="p-4">
                        {/* Movie Title */}
                        <h2 className="text-xl font-bold text-white mb-2 truncate">
                            {randomMovie?.movieName}
                        </h2>
                        {/* Cast Members */}
                        <p className="text-sm text-gray-500 tracking-wide mb-1">
                            Cast
                        </p>
                        <p className="text-md text-gray-300 line-clamp-2">
                            {randomMovie?.cast.join(", ")}
                        </p>
                        {/* Release Date */}
                        <p className="text-sm text-gray-400 mb-3">
                            {randomMovie?.releaseDate}
                        </p>
                        <Button
                            variant="primary"
                            size="medium"
                            onClick={handleShuffle}
                        >
                            Shuffle
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
