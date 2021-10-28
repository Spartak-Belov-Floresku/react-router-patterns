import useFields from "./hooks/useFields";
import useColors from "./hooks/useColors";
import { useHistory } from "react-router-dom";

const NewColorForm = () => {
    const history = useHistory();

    const [formData, handleChange, releaseButton] = useFields({
        name: '',
        hex: ''
    });

    const SetNewColor = color => {
        let colors = useColors()

        if(Object.keys(colors).some(colorName => colorName === color.name))
            colors[color.name] = color.hex
        else
            colors = {...colors, [color.name]: color.hex}

        localStorage.setItem("colors", JSON.stringify(colors))
    }

    const handleSubmit = e => {
        e.preventDefault();
        SetNewColor(formData);
        history.push(`/colors/${formData.name}`);
    }

    return (
        <div className="NewColor">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Color name</label>
              <input
                name="name"
                id="name"
                placeholder="Enter color name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="hex">Color value</label>
              <input
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={formData.hex}
              />
            </div>
            {!releaseButton()?<input type="Submit" value="Add this color" disabled />:<input type="Submit" value="Add this color" readOnly/>}
          </form>
        </div>
    );
}

export default NewColorForm;