const useColors = () => { 
    return localStorage.getItem("colors")? JSON.parse(localStorage.getItem("colors")): {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
}

export default useColors;