import {useState} from 'react';

function SearchBar({searchProductHandler}){

    const [query, setQuery] = useState("");

    const searchProductBar = (e) =>{
        setQuery(e.target.value)
        
        return searchProductHandler(e.target.value)
    }
    return (
        <div>
            <label htmlFor='search bar'>Search</label>
            <input placeholder="search a product" value={query} type="text" onChange={searchProductBar} style={{ width: "80vw", margin: "auto"}}/>
        </div>
    )
}

export default SearchBar;