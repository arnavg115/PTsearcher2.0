function Home() {
    // @ts-ignore
    const [loaded, setLoaded] = React.useState(false);
    // @ts-ignore
    const [value, setValue] = React.useState("");
    // @ts-ignore
    React.useState(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []);
    // @ts-ignore
    React.useEffect(() => {
        const unsub = console.log(value);
    }, [value]);
    const handleChange = (value) => {
        setValue(value.target.value.toString());
    };
    if (loaded) {
        return (
        // @ts-ignore
        React.createElement("div", { className: "input-group mb-3" },
            React.createElement("span", { className: "input-group-text", id: "basic-addon1" }),
            React.createElement("input", { style: { color: "green" }, input: true, value: value, placeholder: "Enter the Element,Atomic symbol or number", onChange: (value) => handleChange(value), className: "form-control" })));
    }
    else {
        return (
        // @ts-ignore
        React.createElement("div", null,
            React.createElement("p", null, "Loading"),
            React.createElement("p", null, "Bruh")));
    }
}
const domContainer = document.querySelector("#root");
// @ts-ignore
ReactDOM.render(
// @ts-ignore
React.createElement("div", null,
    React.createElement(Home, null)), domContainer);
