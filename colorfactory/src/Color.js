import { Link, useParams, Redirect } from "react-router-dom";
import useColors from "./hooks/useColors";

const Color = () => {
    const colors = useColors();
    const { name } = useParams();
    
    const color = colors[name];

    if(color){
        return (
            <div style={{ backgroundColor: color }}>
                <p>this is {name}.</p>
                <p>Isn't it beautiful?</p>
                <p>
                <Link to="/">Go back</Link>
                </p>
            </div>
        );
    }else{
        return <Redirect to="/colors" />
    }
}

export default Color;