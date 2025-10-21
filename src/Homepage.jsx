import React, { useState } from "react";

export default function Homepage() {
    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);
    return (
        <div className="relative inline-block">
            <label htmlFor="year">Select time period:</label>
            <button
                onClick={() => {
                    setIsOpenFrom(!isOpenFrom);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                From
            </button>
            {isOpenFrom && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        1980
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        1990
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2000
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2010
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2020
                    </a>
                </div>
            )}
            <button
                onClick={() => {
                    setIsOpenTo(!isOpenTo);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                To
            </button>
            {isOpenTo && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        1990
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2000
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2010
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        2020
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Present
                    </a>
                </div>
            )}
        </div>
    );
}
