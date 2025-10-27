import "./App.css";
import ChooseMovie from "./ChooseMovie";
import Homepage from "./Homepage";
import React, { useState } from "react";

function App() {
    const [preferences, setPreferences] = useState(null);

    const resetPreferences = () => {
        setPreferences(null);
    };

    return (
        <>
            {!preferences ? (
                <Homepage setPreferences={setPreferences} />
            ) : (
                <ChooseMovie prefs={preferences} handleBackClick={resetPreferences} />
            )}
        </>
    );
}

export default App;
