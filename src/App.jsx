import "./App.css";
import ChooseMovie from "./ChooseMovie";
import Homepage from "./Homepage";
import React, { useEffect, useState } from "react";
import data from "./movies.json";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function App() {
    const [preferences, setPreferences] = useState(null);
    const [movies, setMovies] = useState();

    // Helper: build discover URL from preferences
    const buildDiscoverUrl = (prefs = {}) => {
        const url = new URL("https://api.themoviedb.org/3/discover/movie");
        const params = url.searchParams;

        if (apiKey) params.set("api_key", apiKey);

        // Language mapping: 'EN' -> 'en', 'HI' -> 'hi'
        const lang = prefs.items.join("|");
        params.set("with_original_language", lang);

        // Year range (expected format: YYYY) -> convert to date range for TMDB
        if (prefs.fromYear) {
            params.set(
                "primary_release_date.gte",
                `${String(prefs.fromYear)}-01-01`
            );
        }
        if (prefs.toYear) {
            params.set(
                "primary_release_date.lte",
                `${String(prefs.toYear)}-12-31`
            );
        }

        // Optional: other prefs you may pass through (page, sort_by, etc.)
        // if (prefs.page) params.set("page", String(prefs.page));
        // if (prefs.sort_by) params.set("sort_by", prefs.sort_by);

        return url.toString();
    };

    useEffect(() => {
        if (!preferences) return;

        // If no TMDB API key, fallback to local static data
        if (!apiKey) {
            setMovies(data);
            return;
        }

        const url = buildDiscoverUrl(preferences);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((json) => {
                // TMDB discover returns results array
                setMovies(json.results || []);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                // fallback to local data on error
                setMovies(data);
            });
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
