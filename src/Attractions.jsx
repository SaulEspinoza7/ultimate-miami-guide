import { useState, useContext } from "react";
import DetailsContext from "./context/details-context";
import Axios from "axios";
import NavBar from "./NavBar";
import Results from "./Results";
import "./styles/Attractions.css";
import "./styles/Food.css";
import Museum from "./assets/attractions/museum.jpg";
import Zoo from "./assets/attractions/zoo.jpg";
import Park from "./assets/attractions/park.jpg";
import Landmark from "./assets/attractions/landmark.jpg";
import Beach from "./assets/attractions/beach.jpg";
import Amusement from "./assets/attractions/amusement.jpg";
import Shopping from "./assets/attractions/shopping.jpg";

const Attractions = () => {
    const [place, setPlace] = useState("")
    const [attractions, setAttractions] = useState(null)
    const {placeType, setPlaceType, globalUrl} = useContext(DetailsContext)

    const isButtonDisabled = () => {
        return place == "";
    }

    const retrieveAttractions = () => {
        setPlaceType("Attractions")
        const type = place;

        Axios.get(globalUrl + "attractions", {
            params: {
                type
            }, 
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
              }),
        }).then((response) => {
            setAttractions(response.data);
        })
    }

    return (
        <>
            <NavBar type = "attractions"></NavBar>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Attractions</li>
                </ol>
            </div>

            <div className="attraction-welcome">
                <div className="attraction-welcome-title">
                    <h1>Attractions</h1>
                </div>
            </div>

            <h1 className="question-title">What type of place are you looking for?</h1>

            <div className="container-fluid">
                <div className="row justify-content-center d-flex gap-5 mb-5">
                    <div class={`card col-5 col-lg-2 ${place == "museum" ? "selected-card" : ""}`} onClick={() => setPlace("museum")}>
                        <img src={Museum} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Museum</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${place == "zoo" ? "selected-card" : ""}`} onClick={() => setPlace("zoo")}>
                        <img src={Zoo} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Zoo</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${place == "park" ? "selected-card" : ""}`} onClick={() => setPlace("park")}>
                        <img src={Park} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Park</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${place == "landmark" ? "selected-card" : ""}`} onClick={() => setPlace("landmark")}>
                        <img src={Landmark} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Important Landmark</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${place == "amusement" ? "selected-card" : ""}`} onClick={() => setPlace("amusement")}>
                        <img src={Amusement} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Amusement/Arcade</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${place == "shopping" ? "selected-card" : ""}`} onClick={() => setPlace("shopping")}>
                        <img src={Shopping} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Shopping District</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-3">
                <button disabled={isButtonDisabled()} onClick={retrieveAttractions}>Submit</button>
            </div>

            <Results array={attractions}/>
        </>
    );
}

export default Attractions;