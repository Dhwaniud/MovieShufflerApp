import "./App.css";
import ChooseMovie from "./ChooseMovie";
import Homepage from "./Homepage";
import React, { useState } from "react";

function App() {
    const [preferences, setPreferences] = useState(null);

    return (
        <>
            <Homepage setPreferences={setPreferences} />
            {preferences && <ChooseMovie prefs={preferences}/>}
        </>
    );
}

export default App;
