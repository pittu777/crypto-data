import React, { useContext, useRef } from "react";
import Search from "./Search";



const Filters = () => {

    const currencyRef = useRef(null);

    const handleCurrencySubmit = (e) => {
        e.preventDefault();
        let val = currencyRef.current.value;
        setCurrency(val);
        currencyRef.current.value = "";
    };

    const handleSort = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setSortBy(val);
    };

    return (
        <div
            className="w-full h-12 border-2 border-gray-100 rounded-lg
    flex items-center justify-between relative
    "
        >
            <Search />

        </div>
    );
};

export default Filters;