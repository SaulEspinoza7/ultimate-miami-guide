import ResultComponent from "./ResultComponent";
import { useEffect } from "react"

const Results = (props) => {
    if(props.array == null)
        return "";

    useEffect(() => {
        scrollTo({top: 2000, behavior:"smooth"})
    }, [props.array])

    return (
        <div className="container">
            <div className="row justify-content-center">
                {props.array.map(results => <ResultComponent key={results.id} id={results.id} name={results.name} image={results.img} description={results.description} url={results.url}/>)}
            </div>
        </div>
    );
}

export default Results;