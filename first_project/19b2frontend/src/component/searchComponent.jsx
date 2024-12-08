
import React, { useEffect } from "react";

function SearchComponent() {
    const [searchValue, setSearchValue] = React.useState("");
    useEffect(() => {
        console.log("working");
    }, [searchValue]);

    return (
        <div>
            {/* <TextField
                label="Search"
                type="text"
                variant="outlined"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            /> */}
            <input type="text" />
        </div>

    );
}

export default SearchComponent;