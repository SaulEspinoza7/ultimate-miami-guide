import { useContext } from "react";
import DetailsContext from "./context/details-context";
import componentStyles from "./styles/ResultComponent.module.css";
import {Link} from "react-router-dom";

const ResultComponent = (props) => {
    const {setDetails} = useContext(DetailsContext);

    return (
        <>
            <div className={`card col-md-3 m-2 ${componentStyles.card}`} >
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <Link to={`/food/restaurants/${props.id}`} class="btn btn-primary" onClick={() => setDetails(props)}>More Information</Link>
                </div>
            </div>
        </>
    );
}

export default ResultComponent;