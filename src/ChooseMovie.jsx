import React, { useCallback, useState } from "react";
import data from "./movies.json";
import Button from "./Components/Button";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

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
                        <img
                            src={
                                "https://image.tmdb.org/t/p/w500" +
                                randomMovie?.poster_path
                            }
                        />
                    </div>
                    <div className="p-4">
                        {/* Movie Title */}
                        <h2 className="text-xl font-bold text-white mb-2 truncate">
                            {randomMovie?.title}
                        </h2>
                        {/* Cast Members */}
                        <p className="text-sm text-gray-500 tracking-wide mb-1">
                            Cast
                        </p>
                        <p className="text-md text-gray-300 line-clamp-2">
                            {randomMovie?.cast?.join(", ")}
                        </p>
                        {/* Release Date */}
                        <p className="text-sm text-gray-400 mb-3">
                            {randomMovie?.release_date}
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
