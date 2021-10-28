import { Link } from "react-router-dom";
import useColors from "./hooks/useColors";

const ColorList = () => {
    const colors = useColors();

    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
      ));

    return (
        <>
            <header className="App-header">
                <h5>Welcom to the color factory.</h5>
                <h3><Link to="/colors/new">Add a color</Link></h3>
                </header>
            <div className="ColorList-intro">
                <p>Please select a color.</p>
                <ul>{colorLinks}</ul>
            </div>
        </>
      );
    
}

export default ColorList;