import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";


const SearchInput = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState("");
    let { searchData } = useContext(CryptoContext);

    let handleInput = (e) => {
        e.preventDefault();
        let query = e.target.value;
        setSearchText(query);
        handleSearch(query);
    };

    return (
        <>
            <form
                className="w-96 relative flex items-center
        ml-7 font-nunito
        "

            >
                <input
                    type="text"
                    name="search"
                    value={searchText}
                    className="w-full rounded bg-gray-200
          placeholder:text-gray-100 pl-2
          required outline-0 border border-transparent 
          focus:border-cyan
          "
                    onChange={handleInput}
                    placeholder="search here..."
                />
                <button type="submit" className="absolute right-1 cursor-pointer">
                    <img src={searchIcon} className="w-full h-auto" alt="search" />
                </button>
            </form>
            {
                searchText.length > 0 ?
                    <ul className="absolute top-11 right-0 w-96 h-96 rounded
          overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 
          backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200
          "
                    >
                        {
                            searchData ?
                                searchData.map(coin => {
                                    return <li className="flex items-center ml-4 my-2 cursor-pointer"
                                        key={coin.id}>
                                        <img className="w-[1rem] h-[1rem] mx-1.5" src={coin.thumb} alt={coin.thumb} />

                                        <span>{coin.name}</span>
                                    </li>
                                })
                                : <h2>please wait...</h2>
                        }
                    </ul> : null
            }
        </>
    )
}


const Search = () => {

    let { getSearchResult } = useContext(CryptoContext);


    const debounceFunc = debounce(function (val) {
        getSearchResult(val);
    }, 2000);



    return (
        <div className="relative">
            <SearchInput handleSearch={debounceFunc} />
        </div>
    );
};

export default Search;