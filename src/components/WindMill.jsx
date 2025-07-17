
// className="stroke-2 stroke-black" style={{ strokeLinecap: "round" }}
const WindMill = () => {
    return (
        <svg width={200} height={400} className="border border-amber-500" >
            <g className="stroke-2 stroke-black">
                <circle cx={100} cy={140} r={12} />
                <path d="M 93 150 C -7 -10 7 -10 7 -20 l 2 -80  L -2 -80" />
            </g >
            <path d="M 93 300 L 107 300 L 103 165 L 97 165" className="stroke-2 stroke-black" style={{ strokeLinecap: "round" }} />
        </svg>
    )
}

export default WindMill