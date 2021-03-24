
function Home() { 
    // @ts-ignore
    const [loaded, setLoaded] = React.useState(false);
    // @ts-ignore
    const [value,setValue] = React.useState("")
    // @ts-ignore
    const [data, setData] = React.useState({})
    const [none,setNone] = React.useState(true)
    // @ts-ignore
    React.useState(()=>{
        setTimeout(()=>{
            setLoaded(true);
        },1000)
    },[])
    React.useEffect(()=>{
        const load =  async ()=>{
            const data = await axios.get('/query/'+value);
            setData(data.data)
        }
        if(value !== ""){
            load()
        }
        console.log(data)

    },[value]) 
    const handleChange = (vsalue)=>{
        setValue(vsalue.target.value)
        // @ts-ignore
    }
    if(loaded){
        return (
            // @ts-ignore
            <div>
            <div>

                {/* @ts-ignore*/}
                <input value = {value} placeholder="Enter the Element,Atomic symbol or number" onChange={(value)=>handleChange(value)} className="form-control" style= {{"width":400}}/>
                {/* @ts-ignore*/}
              
                
            </div>
                <div>
                    <p>{data[0]}</p>
                    <p>{data[1]}</p>
                    <p>{data[2]}</p>
                    <p>{data[3]}</p>
                </div>
            </div>
        )
    }
    else{
        return (
            // @ts-ignore
            <div>
                {/* @ts-ignore*/}
                <p>Loading</p>

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