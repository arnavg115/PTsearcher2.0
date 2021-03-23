

function Home() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "HELLO"
        )
    );
}

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Home, null)
), domContainer);