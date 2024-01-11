import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Results from "./Results";

const Searched = () => {
    const [specificArray, setSpecificArray] = useState([]);
    const place = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("name");

    useEffect(() => {
        const type = place.type;
        const name = "%" + query + "%";

        Axios.get("https://us-central1-vernal-signal-391117.cloudfunctions.net/function-1/specific-place", {
            params: {
                type, 
                name
            }
        }).then((response) => {
            setSpecificArray(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <>
            <NavBar type="restaurants"/>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/food">Food</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Results</li>
                </ol>
            </div>

            <h1 className="d-flex justify-content-center my-4">Results for '{query}'</h1>

            <Results array = {specificArray}/>
        </>
    );
}

export default Searched;