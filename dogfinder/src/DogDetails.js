import { useParams, Redirect } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    let dog = name? dogs.filter(elm => elm.name.toLowerCase() === name): null;

    if(dog.length)
        dog = dog[0];
    else
        return <Redirect to="/dogs"/>

    return(
        <div>
            <img alt={dog.name} src={dog.src} />
            <h2>{dog.name}</h2>
            <h3>{dog.age}</h3>
            <div>
                {dog.facts.map((fact, i) => <div key={i}>{fact}</div>)}
            </div>
        </div>
    )
}

export default DogDetails;