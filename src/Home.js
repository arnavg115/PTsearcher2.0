

function Home() {
    return (
        <div>
            <p>HELLO</p>
        </div>
    )
}

const domContainer = document.querySelector("#root")
ReactDOM.render(
    <div>
        <Home />
    </div>
,domContainer)