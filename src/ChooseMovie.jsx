import React from "react";
import data from "./movies.json";

export default function ChooseMovie({prefs}) {
    return (
        <>
            <div>
                {prefs.fromYear}
                {prefs.toYear}
                {prefs.items}
                <button>Shuffle</button>
                
            </div>
        </>
    );
}
