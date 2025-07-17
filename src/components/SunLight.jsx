

const SunLight = () => {
    return (

        <svg width={100} height={100} className="border border-amber-500" viewBox="-15 -15 30 30">
            <circle r={4} />

            <path id="ray" d="M 0, 14 L 0, 9" className="stroke-2 stroke-black" style={{ strokeLinecap: "round" }} />
            <use href="#ray" transform="rotate(45)" />
            <use href="#ray" transform="rotate(90)" />
            <use href="#ray" transform="rotate(135)" />
            <use href="#ray" transform="rotate(180)" />
            <use href="#ray" transform="rotate(225)" />
            <use href="#ray" transform="rotate(270)" />
            <use href="#ray" transform="rotate(315)" />
        </svg>

    )
}

export default SunLight