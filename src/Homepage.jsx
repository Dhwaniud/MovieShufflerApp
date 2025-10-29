import React, { useState } from "react";
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
        hi: false,
        en: false,
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
            items: items.length === 0 ? ["en", "hi"] : items,
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
            <div className="flex flex-col gap-12 w-full px-8">
                <label className="block text-xl text-green-200 font-serif font-semibold">
                    Select time period
                </label>
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="from-year"
                        className="block text-xl text-green-200"
                    >
                        From
                    </label>
                    <select
                        id="from-year"
                        name="fromYear"
                        className="mt-2 w-48 bg-teal-100 border rounded shadow-lg text-xl"
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        {getYears().map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    <label
                        htmlFor="to-year"
                        className="block mt-2 text-green-200 text-xl"
                    >
                        To
                    </label>
                    <select
                        id="to-year"
                        name="toYear"
                        className=" mt-2 w-48 bg-teal-100 border rounded shadow-lg text-xl"
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
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-xl text-green-200 cursor-pointer">
                        <input
                            type="checkbox"
                            name="bollywood"
                            checked={checkedItems.hi}
                            onChange={(e) =>
                                setCheckedItems({
                                    ...checkedItems,
                                    hi: e.target.checked,
                                })
                            }
                            className="w-4 h-4"
                        ></input>
                        Bollywood
                    </label>

                    <label className="flex items-center gap-2 text-xl text-green-200 cursor-pointer">
                        <input
                            type="checkbox"
                            name="hollywood"
                            checked={checkedItems.en}
                            onChange={(e) =>
                                setCheckedItems({
                                    ...checkedItems,
                                    en: e.target.checked,
                                })
                            }
                            className="w-4 h-4"
                        ></input>
                        Hollywood
                    </label>
                </div>
                <Button variant="primary" size="medium" onClick={handleSend}>
                    Next
                </Button>
            </div>
        </div>
    );
}
