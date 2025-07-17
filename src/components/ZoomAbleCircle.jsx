import { useEffect, useRef, useState } from "react";


export const ZoomAbleCircle = () => {
    const [radius, setRadius] = useState(25);
    const circleRef = useRef(null);

    // console.log("circleRef", circleRef);
    const handScroll = (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        // console.log("delta", delta);
        const newRadius = radius - delta / 10;
        // console.log("newRadius: ", newRadius);
        setRadius(Math.max(5, Math.min(50, newRadius))); // Limit the radius between 5 and 50
    }

    useEffect(() => {
        const circleElement = circleRef.current;
        // console.log("circleElement", circleElement);
        circleElement.addEventListener("wheel", handScroll);
        return () => {
            circleElement.removeEventListener("wheel", handScroll);
        };
    }, [radius])


    return (
        <div className="flex items-center justify-center h-screen  gap-10">
            <div className="border-2 border-blue-500">
                <svg id="three" width="100" height="100" viewBox="0 0 100 100" ref={circleRef}>
                    <circle cx="50" cy="50" r={radius} fill="red" />
                </svg>
            </div>
        </div>
    )
}


{/* <div className="border-2 border-blue-500">
                <svg id="one" width="50" height="50" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="25" fill="red" />
                </svg>
            </div>

            <div className="border-2 border-blue-500">
                <svg id="two" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="25" fill="green" />
                </svg>
            </div> */}