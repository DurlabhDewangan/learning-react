// App.jsx
import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div

  className="w-[100vw] h-[100vh] duration-200"
style={{ backgroundColor: color }}

      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  w-full">
            <button onClick={()=>setColor("red")} className="outline-none px-4 py-1" style={{backgroundColor:'red'}}>red</button>
            <button onClick={()=>setColor("black")}  className="outline-none px-4 py-1" style={{backgroundColor:'black'}}>black</button>
            <button onClick={()=>setColor("yellow")}  className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:'yellow'}}>yellow</button>
            <button onClick={()=>setColor("blue")}  className="outline-none px-4 py-1" style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={()=>setColor("purple")}  className="outline-none px-4 py-1" style={{backgroundColor:'purple'}}>purple</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4 py-1" style={{backgroundColor:'green'}}>green</button>
            <button onClick={()=>setColor("brown")}  className="outline-none px-4 py-1" style={{backgroundColor:'brown'}}>brown</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
