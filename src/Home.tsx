
function Home() { 
    // @ts-ignore
    const [loaded, setLoaded] = React.useState(false);
    // @ts-ignore
    const [value,setValue] = React.useState("")
    // @ts-ignore
    React.useState(()=>{
        setTimeout(()=>{
            setLoaded(true);
        },1000)
    },[])
    // @ts-ignore
    React.useEffect(()=>{
        const unsub = console.log(value)
    },[value])
    const handleChange = (value)=>{
        setValue(value.target.value.toString())
    }
    if(loaded){
        return (
            // @ts-ignore
            <div className="input-group mb-3">
                {/* @ts-ignore*/}
                <span className="input-group-text" id="basic-addon1"></span>
                {/* @ts-ignore*/}
                <input style = {{color:"green"}}input value = {value} placeholder="Enter the Element,Atomic symbol or number" onChange={(value)=>handleChange(value)} className="form-control"/>
            </div>
        )
    }
    else{
        return (
            // @ts-ignore
            <div>
                {/* @ts-ignore*/}
                <p>Loading</p>
                {/* @ts-ignore*/}
                <p>Bruh</p>
            </div>
        )
    }
}

const domContainer = document.querySelector("#root")
// @ts-ignore
ReactDOM.render(
    // @ts-ignore
    <div>
        {/* @ts-ignore*/}
        <Home/>
    </div>,
    domContainer
)