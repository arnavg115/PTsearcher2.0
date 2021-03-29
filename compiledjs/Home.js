import { Card } from "./components/Card.js";
function Home() {
    // @ts-ignore
    const [loaded, setLoaded] = React.useState(true);
    // @ts-ignore
    const [value, setValue] = React.useState("");
    // @ts-ignore
    const [data, setData] = React.useState({});
    // @ts-ignore
    const [none, setNone] = React.useState(true);
    // @ts-ignore
    React.useEffect(() => {
        const load = async () => {
            // @ts-ignore
            const data = await axios.get('/query/' + value);
            setData(data.data);
        };
        if (value !== "") {
            load();
        }
    }, [value]);
    // @ts-ignore
    React.useEffect(() => {
        if (value === "") {
            setNone(true);
        }
        else {
            setNone(false);
        }
    }, [value]);
    const handleChange = (vsalue) => {
        setValue(vsalue.target.value);
        // @ts-ignore
    };
    const card = () => {
        if (!none) {
            // @ts-ignore
            return React.createElement(Card, { info: data });
        }
        else {
            return;
        }
    };
    if (loaded) {
        return (
        // @ts-ignore
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("input", { value: value, placeholder: "  Enter the Element, Atomic symbol or number", onChange: (value) => handleChange(value), className: "form-control", style: { width: 400, borderRadius: 20 } })),
            React.createElement("div", { style: { height: 30 } }),
            card()));
    }
    else {
        return (
        // @ts-ignore
        React.createElement("div", null,
            React.createElement("p", null, "Loading")));
    }
}
const domContainer = document.querySelector("#root");
// @ts-ignore
ReactDOM.render(
// @ts-ignore
React.createElement("div", null,
    React.createElement(Home, null)), domContainer);
