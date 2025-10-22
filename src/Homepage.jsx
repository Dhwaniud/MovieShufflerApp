import React, { useState } from "react";

export default function Homepage() {
    const options = [
        "1980 to 1990",
        "1990 to 2000",
        "2000 to 2010",
        "2010 to 2020",
        "2020 to Present",
        "All",
    ];

    const [checkedItems, setCheckedItems] = useState({
        Bollywood: false,
        Hollywood: false,
        Both: false,
    });

    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    function handleClick(option) {
        setSelectedValue(option);
        console.log(option);
        setIsOpenFrom(false);
    }

    function handleSend(e) {
        console.log("Got it Girrrlll");
    }

    return (
        <div className="p-4, bg-white, rounded-md, shadow-md">
            <div className="relative inline-block">
                <label htmlFor="year">Select time period:</label>
                <button
                    onClick={() => {
                        setIsOpenFrom(!isOpenFrom);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {selectedValue || "Select an option"}
                </button>
                {isOpenFrom && (
                    <ul className="absolute mt-2 w-48 bg-black border rounded shadow-lg" required>
                        {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => handleClick(option)}
                                className={`block px-4 py-2 hover:bg-gray-100 `}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <label className="mr-2 mb-4 text-pink-500 rounded p-2 space-x-1">
                    Bollywood
                    <input
                        className="mr-2 mb-4 text-pink-500 rounded p-2"
                        type="checkbox"
                        name="bollywood"
                        checked={checkedItems.Bollywood}
                        onChange={(e) =>
                            setCheckedItems({
                                ...checkedItems,
                                Bollywood: e.target.checked,
                            })
                        }
                    ></input>
                </label>

                <label className="mr-2 mb-4 text-pink-500 rounded p-2">
                    Hollywood
                    <input
                        className="mr-2 mb-4 text-pink-500 rounded p-2"
                        type="checkbox"
                        name="hollywood"
                        checked={checkedItems.Hollywood}
                        onChange={(e) =>
                            setCheckedItems({
                                ...checkedItems,
                                Hollywood: e.target.checked,
                            })
                        }
                    ></input>
                </label>

                <label className="mr-2 mb-4 text-pink-500 rounded p-2">
                    Both
                    <input
                        className="mr-2 mb-4 text-pink-500 rounded p-2"
                        type="checkbox"
                        name="Both"
                        checked={checkedItems.Both}
                        onChange={(e) =>
                            setCheckedItems({
                                ...checkedItems,
                                Both: e.target.checked,
                            })
                        }
                    ></input>
                </label>
            </div>
            <button
                type="Primary"
                className="mr-2 mb-4 text-blue-500 rounded p-2"
                onClick={handleSend}
            >
                Get it, Girrrrll
            </button>
        </div>
    );
}
