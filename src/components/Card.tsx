
export const Card = (props)=>{
    return(
        // @ts-ignore
        <div className="card" style={{textAlign:"center", paddingBottom:20, paddingTop:20, borderRadius:20, }}>
            {/* @ts-ignore */}
            <h1>{props.info[2]}</h1>
            {/* @ts-ignore */}
            <p>Atomic Number: {props.info[0]}</p>
            {/* @ts-ignore */}
            <p>Atomic Symbol: {props.info[3]}</p>
            {/* @ts-ignore */}
            <p>Atomic Weight: {props.info[1]}</p>
            {/* @ts-ignore */}
            <p>Electron Config: {props.info[12]}</p>
            {/* @ts-ignore */}
            <a href={'https://en.wikipedia.org/wiki/'+props.info[2]} target="blank"><button style={{borderRadius:20}} className="btn btn-outline-success">For more info about {props.info[2]}</button></a>
        </div>
    )
}
