import { TextField } from "@mui/material";
import React, { useEffect } from "react";

function SearchTheComponent() {
    const [searchValue, setSearchValue] = React.useState("");
    const [result, setResult] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    // const [responseMessage, setResponseMessage] = React.useState("");  -- will be used for post api

    useEffect(() => {
        // console.log("working");
        if (!searchValue) {
            setResult([]);
            return;
        }
        try {
            setIsLoading(true);
            const fetchData = async () => {
                const response = await fetch(`http://10.19.80.70:8081/test_api//search.php?query=${searchValue}`);
                console.log(response);
                const data = await response.json();
                setResult(data.results || []);
            }
            fetchData();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }, [searchValue]);


    const postApiCall = async () => {
        try {
            const response = await fetch('http://localhost:8081/test_api/post_api.php',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ searchValue }),
                });
            const data = await response.json();
            setResponseMessage(data.message || "Unknown error");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        // GET
        // <div>
        //     <TextField
        //         label="Search"
        //         type="text"
        //         variant="outlined"
        //         value={searchValue}
        //         onChange={(e) => setSearchValue(e.target.value)}
        //     />
        //     {/* <input type="text" /> */}
        //     {isLoading ? <p>Loading...</p> : result.map((item) => (<p>{item}</p>))}
        // </div>

        //POST: 
        <div>
            <TextField
                label="Search"
                type="text"
                variant="outlined"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* <button onClick={() => {
                console.log("clicked");
            }}>Submit</button> */}
            <button onClick={postApiCall}>Submit</button>
        </div>

    );
}

export default SearchTheComponent;