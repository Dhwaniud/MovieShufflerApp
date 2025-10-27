import React from "react";
import data from "./movies.json";

export default function ChooseMovie({ prefs, handleBackClick }) {
    return (
        <>
            <div>
                <button onClick={handleBackClick}>Back</button>
                {prefs.fromYear}
                {prefs.toYear}
                {prefs.items}
                <button>Shuffle</button>
            </div>
        </>
    );
}
