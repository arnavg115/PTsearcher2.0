function Home() {
    // @ts-ignore
    const [loaded, setLoaded] = React.useState(false);
    // @ts-ignore
    const [value, setValue] = React.useState("");
    // @ts-ignore
    const [data, setData] = React.useState({});
    const [none, setNone] = React.useState(true);
    // @ts-ignore
    React.useState(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []);
    React.useEffect(() => {
        const load = async () => {
            const data = await axios.get('/query/' + value);
            setData(data.data);
        };
        if (value !== "") {
            load();
            setNone(false);
            console.log(none);
        }
    }, [value]);
    const handleChange = (vsalue) => {
        setValue(vsalue.target.value);
        // @ts-ignore
    };
    if (loaded) {
        return (
        // @ts-ignore
        React.createElement("div", { className: "input-group mb-3" },
            React.createElement("span", { className: "input-group-text", id: "basic-addon1" }),
            React.createElement("input", { style: { color: "green" }, input: true, value: value, placeholder: "Enter the Element,Atomic symbol or number", onChange: (value) => handleChange(value), className: "form-control" }),
            () => (React.createElement("div", null,
                React.createElement("p", null, "HEllo")))));
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
