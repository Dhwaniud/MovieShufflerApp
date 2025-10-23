import React, { useState } from "react";
import ChooseMovie from "./ChooseMovie";

const getYears = (startYear = 1980) => {
    const currentYear = new Date().getFullYear();
    const fromYears = [];

    for (let i = startYear; i < currentYear; i += 5) {
        fromYears.push(i);
    }
    fromYears.push(currentYear);

    return fromYears;
};

export default function Homepage() {
    const [checkedItems, setCheckedItems] = useState({
        Bollywood: false,
        Hollywood: false,
        Both: false,
    });
    const [selectedFromYear, setSelectedFromYear] = useState();
    const [clickedNext, setClickedNext] = useState(false);

    function handleChange(e) {
        setSelectedFromYear(e.target.value);
    }

    function handleSend() {
        setClickedNext(true);
        console.log(checkedItems);
        console.log("Next Page");
    }

    return (
        <div className="p-4 w-full h-full bg-black text-base flex-col rounded-md shadow-md">
            <div className="relative inline-block mt-8">
                <label htmlFor="from-year">From:</label>
                <select
                    id="from-year"
                    className="mt-2 w-48 bg-black border rounded shadow-lg"
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {getYears().map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <label htmlFor="to-year">To:</label>
                <select
                    id="to-year"
                    className=" mt-2 w-48 bg-black border rounded shadow-lg"
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    {getYears(selectedFromYear).map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="mr-2 mb-4 text-pink-500 rounded p-2 space-x-1">
                    Bollywood
                    <input
                        className="mx-1 mb-4 mt-20 text-pink-500 rounded p-2"
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

                <label className="mx-2 mb-4 text-pink-500 rounded p-2">
                    Hollywood
                    <input
                        className="mx-1 mb-4 text-pink-500 rounded p-2"
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

                <label className="mx-2 mb-4 text-pink-500 rounded p-2">
                    Both
                    <input
                        className="mx-1 mb-4 text-pink-500 rounded p-2"
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
                type="button"
                className="mr-2 mb-4 mt-10 text-blue-500 rounded p-2 object-center"
                onClick={handleSend}
            >
                Next
            </button>
            {clickedNext && (
                <ChooseMovie
                    option={selectedFromYear}
                    checkedItems={checkedItems}
                />
            )}
        </div>
    );
}
