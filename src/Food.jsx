import './styles/Food.css'
import NavBar from './NavBar.jsx'
import Results from './Results.jsx'
import React, {useState} from "react"
import Affordable from "./assets/affordable-rest.jpg"
import Fancy from "./assets/fancy-restaurant.jpg"
import Cuban from "./assets/cuban.jpg"
import Italian from "./assets/italian.jpg"
import Chinese from "./assets/chinese.jpg"
import Sandwich from "./assets/sandwich.jpg"
import Middle from "./assets/middle-east.jpg"
import French from "./assets/french.jpg"
import Bar from "./assets/bar.jpg"
import Hispanic from "./assets/hispanic.jpg"
import Axios from "axios"

const Food = () => {
    const [restaurants, setRestaurants] = useState(null)
    const [restaurantType, setRestaurantType] = useState("")
    const [cuisine, setCuisine] = useState("")

    const isButtonDisabled = () => {
        return restaurantType == "" || cuisine == ""
    }

    const retrieveRestaurants = () => {
        const affordable = restaurantType;
        const myCuisine = cuisine;
        
        Axios.get("https://us-central1-vernal-signal-391117.cloudfunctions.net/function-1/restaurants", {
            params: {
                affordable,
                myCuisine
            }
        }).then((response) => {
            setRestaurants(response.data)
            console.log(response.data);
        })
    }

    return (
        <>
            <NavBar type = "restaurants"></NavBar>
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Food</li>
                </ol>
            </div>
            
            <div className='food-welcome'>
                <div className='food-welcome-title'>
                    <h1>Food</h1>
                </div>
            </div>

            <h1 className='question-title'>What is your budget?</h1>

            <div className='container-fluid'>
                <div className='row justify-content-center d-flex gap-5'>
                    <div class={`card col-5 col-lg-2 ${restaurantType == "y" ? "selected-card" : ""}`} onClick={() => setRestaurantType("y")}>
                        <img src={Affordable} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Affordable restaurants</p>
                        </div>
                    </div>

                    <div class={`card col-5 col-lg-2 ${restaurantType == "n" ? "selected-card" : ""}`} onClick={() => setRestaurantType("n")}>
                        <img src={Fancy} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Fancy restaurants</p>
                        </div>
                    </div>
                </div>

                <div><h1 className='question-title'>What type of food are you looking for?</h1></div>

                <div className='row justify-content-center d-flex gap-5 my-4'>
                    <div class={`card col-lg-2 ${cuisine == "cuban" ? "selected-card" : ""}`} onClick={() => setCuisine("cuban")}>
                        <img src={Cuban} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Cuban</p>
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "italian" ? "selected-card" : ""}`} onClick={() => setCuisine("italian")}>
                        <img src={Italian} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Italian</p>
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "chinese" ? "selected-card" : ""}`} onClick={() => setCuisine("chinese")}>
                        <img src={Chinese} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Chinese</p>
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "sandwich" ? "selected-card" : ""}`} onClick={() => setCuisine("sandwich")}>
                        <img src={Sandwich} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Sandwiches</p>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center d-flex gap-5 mb-5'>
                    <div class={`card col-lg-2 ${cuisine == "middle" ? "selected-card" : ""}`} onClick={() => setCuisine("middle")}>
                        <img src={Middle} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Middle Eastern</p>
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "french" ? "selected-card" : ""}`} onClick={() => setCuisine("french")}>
                        <img src={French} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">French</p>
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "bar" ? "selected-card" : ""}`} onClick={() => setCuisine("bar")}>
                        <img src={Bar} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Bar</p> 
                        </div>
                    </div>

                    <div class={`card col-lg-2 ${cuisine == "hispanic" ? "selected-card" : ""}`} onClick={() => setCuisine("hispanic")}>
                        <img src={Hispanic} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <p class="card-text">Hispanic</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='justify-content-center d-flex mb-3'>
                <button disabled={isButtonDisabled()} onClick={retrieveRestaurants}>Submit</button>
            </div>

            <Results array={restaurants} />
        </>
    );
}

export default Food;