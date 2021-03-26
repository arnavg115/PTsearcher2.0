
export const Card = (props)=>{
    return(
        <div className="card" style={{textAlign:"center", paddingBottom:20, paddingTop:20, borderRadius:20, }}>
            <h1>{props.info[2]}</h1>
            <p>Atomic Number: {props.info[0]}</p>
            <p>Atomic Symbol: {props.info[3]}</p>
            <p>Atomic Weight: {props.info[1]}</p>
            <p>Electron Config: {props.info[12]}</p>
            <a href={'https://en.wikipedia.org/wiki/'+props.info[2]} target="blank"><button style={{borderRadius:20} className="btn btn-outline-success">For more info about {props.info[2]}</button></a>
        </div>
    )
}
