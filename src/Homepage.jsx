import React, { useState } from "react";
import ChooseMovie from "./ChooseMovie";
import Button from "./Components/Button";

const getYears = (startYear = 1980) => {
    const currentYear = new Date().getFullYear();
    const fromYears = [];

    for (let i = Number(startYear); i < currentYear; i += 5) {
        fromYears.push(i);
    }
    //console.log(fromYears)
    fromYears.push(currentYear);

    return fromYears;
};

export default function Homepage(props) {
    const [checkedItems, setCheckedItems] = useState({
        Bollywood: false,
        Hollywood: false,
    });
    const [selectedFromYear, setSelectedFromYear] = useState();
    const [selectedToYear, setSelectedToYear] = useState();

    function handleChange(e) {
        if (e.target.name === "fromYear") {
            setSelectedFromYear(e.target.value);
        } else {
            setSelectedToYear(e.target.value);
        }
    }

    function handleSend() {
        const items = Object.entries(checkedItems)
            .filter(([_, v]) => v)
            .map(([k]) => k);

        props.setPreferences({
            fromYear: selectedFromYear ?? 1980,
            toYear: selectedToYear ?? new Date().getFullYear(),
            items: items.length === 0 ? ["Hollywood", "Bollywood"] : items,
        });
    }

    return (
        <div className="p-4 w-full h-full bg-black flex-col">
            <h1>Select </h1>
            <div className="relative inline-block mt-8 text-white">
                <label htmlFor="from-year">From:</label>
                <select
                    id="from-year"
                    name="fromYear"
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
                    name="toYear"
                    className=" mt-2 w-48 bg-black border rounded shadow-lg"
                    onClick={handleChange}
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
                <label className="mx-1 mb-4 text-pink-500 rounded p-2 space-x-1">
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
            </div>
            <Button variant="pink" size="medium" onClick={handleSend}>
                Next
            </Button>
        </div>
    );
}
