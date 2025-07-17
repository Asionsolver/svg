import { useEffect, useState } from "react";


const BarDiagram = () => {
    const dataPoints = [3, 5, 2, 8, 6, 5, 9, 15, 8]; // Example data points
    const [currentHeight, setCurrentHeight] = useState(new Array(dataPoints.length).fill(0))  // শুরুতে সমস্ত বারের উচ্চতা 0
    useEffect(() => {


        const animateBar = () => {
            const newHeights = currentHeight.map((height, index) => {
                if (height < dataPoints[index] * 10) {
                    return height + 1; // প্রতিটি ধাপে উচ্চতা 1 বাড়ানো
                }
                return height;
            });
            setCurrentHeight(newHeights);
        };

        const intervalId = setInterval(animateBar, 20);

        return () => clearInterval(intervalId);
    }, [currentHeight]);
    return (
        <div >
            <svg width={"200"} height={"200"} className="border border-dotted border-amber-500">
                {
                    dataPoints.map((dataPoint, index) => (
                        <rect key={index} x={10 + index * 20} y={190 - currentHeight[index]} width="15" height={currentHeight[index]} fill="#cd803d"

                        />
                    ))
                }
            </svg>
        </div>
    )
}

export default BarDiagram