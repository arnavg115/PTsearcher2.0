export const Card = (props) => {
    return (
    // @ts-ignore
    React.createElement("div", { className: "card", style: { textAlign: "center", paddingBottom: 20, paddingTop: 20, borderRadius: 20, } },
        React.createElement("h1", null, props.info[2]),
        React.createElement("p", null,
            "Atomic Number: ",
            props.info[0]),
        React.createElement("p", null,
            "Atomic Symbol: ",
            props.info[3]),
        React.createElement("p", null,
            "Atomic Weight: ",
            props.info[1]),
        React.createElement("p", null,
            "Electron Config: ",
            props.info[12]),
        React.createElement("a", { href: 'https://en.wikipedia.org/wiki/' + props.info[2], target: "blank" },
            React.createElement("button", { style: { borderRadius: 20 }, className: "btn btn-outline-success" },
                "For more info about ",
                props.info[2]))));
};
