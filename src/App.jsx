import "./App.css";
import ChooseMovie from "./ChooseMovie";
import Homepage from "./Homepage";
import React, { useEffect, useState } from "react";
import data from "./movies.json";

function App() {
    const [preferences, setPreferences] = useState(null);
    const [movies, setMovies] = useState();

    useEffect(() => {
        if (preferences) {
            setMovies(data);
        }
    }, [preferences]);

    const resetPreferences = () => {
        setPreferences(null);
        setMovies(null);
    };

    return (
        <>
            {!preferences && <Homepage setPreferences={setPreferences} />}
            {movies && (
                <ChooseMovie
                    movies={movies}
                    handleBackClick={resetPreferences}
                />
            )}
        </>
    );
}

export default App;
