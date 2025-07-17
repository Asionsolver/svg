import { ZoomAbleCircle } from "./components/ZoomAbleCircle";
// import BarDiagram from "./components/BarDIagram";
// import HamBurger from "./components/HamBurger";
// import SunLight from "./components/SunLight";
// import WindMill from "./components/WindMill";

function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10" >

      {/* <div className="flex items-center gap-2">
        <SunLight />
        <HamBurger />
        <WindMill />
      </div> */}
      {/* <BarDiagram /> */}
      <ZoomAbleCircle />
    </div>
  );
}

export default App;