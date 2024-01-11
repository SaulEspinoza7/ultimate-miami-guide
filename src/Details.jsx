import DetailsContext from "./context/details-context";
import NavBar from "./NavBar";
import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import "./styles/Details.css";

const Details = () => {
    const [extraDetails, setExtraDetails] = useState(null);
    const {details} = useContext(DetailsContext);
    let barWidth = "0%";
    
    useEffect(() => {
        const theUrl = details.url;
        
        Axios.get("https://us-central1-vernal-signal-391117.cloudfunctions.net/function-1/details", {
            params: {
                url: theUrl
            }
        }).then((response) => {
            setExtraDetails(response.data)
            console.log(response.data)
        });
    }, [])

    if(extraDetails == null) {
        return (
            <>
                <NavBar type="restaurants"/>
                <div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="/food">Food</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{details.name}</li>
                    </ol>
                </div>

                <h1 className="d-flex justify-content-center mt-4">{details.name}</h1>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }

    barWidth = Math.round((extraDetails[0] / 5) * 100) + "%";

    return (
        <>
            <NavBar type="restaurants"/>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/food">Food</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{details.name}</li>
                </ol>
            </div>

            <h1 className="d-flex justify-content-center mt-4">{details.name}</h1>

            <div className="d-flex justify-content-center align-items-center scraped-details">
                <div>
                    <ul className="d-flex flex-column">
                        <li>{extraDetails[1][0]}</li>
                        <li>{extraDetails[1][1]}</li>
                        <li>{extraDetails[1][2]}</li>
                    </ul>

                    <h3 className="text-center">{extraDetails[0]}</h3>

                    <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped bg-warning" style={{width: barWidth}}></div>
                    </div>
                </div>

                <div>
                    <img src={details.image} width="500px"></img>
                    <p>{details.description}</p>
                </div>
            </div>

            <div className="d-flex justify-content-center down-space">
                {extraDetails[2] != null && <table>
                    <tr>
                        <th colSpan={2}>Schedule</th>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][0]}</td>
                        <td>{extraDetails[2][1]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][2]}</td>
                        <td>{extraDetails[2][3]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][4]}</td>
                        <td>{extraDetails[2][5]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][6]}</td>
                        <td>{extraDetails[2][7]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][8]}</td>
                        <td>{extraDetails[2][9]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][10]}</td>
                        <td>{extraDetails[2][11]}</td>
                    </tr>
                    <tr>
                        <td>{extraDetails[2][12]}</td>
                        <td>{extraDetails[2][13]}</td>
                    </tr>

                </table>}

                <iframe src={extraDetails[3]} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}

export default Details;