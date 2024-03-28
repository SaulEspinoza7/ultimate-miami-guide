import { useContext } from "react";
import DetailsContext from "./context/details-context";
import componentStyles from "./styles/ResultComponent.module.css";
import {Link, useNavigate} from "react-router-dom";

const ResultComponent = (props) => {
    const {setDetails} = useContext(DetailsContext);
    const navigate = useNavigate();

    const clickComponent = () => {
        setDetails(props);
        navigate("/places/" + props.id);
    }

    return (
        <>
            <div className={`card col-5 col-md-3 m-2 ${componentStyles.card}`} >
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <button onClick={clickComponent} className={`${componentStyles.cardButton}`}>More Information</button>
                </div>
            </div>
        </>
    );
}

export default ResultComponent;