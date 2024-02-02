import { useState } from "react";
import Loader from "./Loader";


const GenerateBtn = ()=>{

    const [img ,setImg] = useState("");
    const [height ,setHeight] = useState("1200");
    const [width ,setWidth] = useState("600");
    const [bgColor ,setBgcolor] = useState("black");
    const [fColor ,setFcolor] = useState("white");
    const [loading , setLoading] = useState(true);

    const paramsHandler = (Event)=>{
        // console.log(Event);
        switch(Event.target.placeholder){
            case "Height":
                setHeight(Event.target.value);
                break;
            case "Width":
                setWidth(Event.target.value);
                break;
            case "Background Color":
                setBgcolor(Event.target.value);
                break;
            case "Font Color":
                setFcolor(Event.target.value);
                break;
        }
    };

    const apiCall = async ()=>{
        setLoading(true);
        setImg("");
        let response = await fetch (`https://api.seriesquotes.10cyrilc.me/pic/solid?background_color=${bgColor}&text_color=${fColor}&text_size=30&x=${width}&y=${height}`);
        setImg(response.url);
        setLoading(false);
        };
    

    return (
        <div className="flex flex-col items-center">
            {/* Main btn to generate new wallpapers */}
            <button onClick={apiCall} className="bg-blue-500 text-4xl rounded-lg p-2 mt-8 mb-4 hover:bg-blue-300 duration-300 font-semibold">GENERATE</button>
            {/* inputs which will contain all the input params */}
            <div className="flex gap-2 p-2 ">
                <input placeholder="Height" onChange={(Event)=>{paramsHandler(Event)}} className="bg-black text-white rounded-md p-1 hover:scale-105 duration-300"></input>
                <input placeholder="Width" onChange={(Event)=>{paramsHandler(Event)}} className="bg-black text-white rounded-md p-1 hover:scale-105 duration-300"></input>
                <input placeholder="Background Color" onChange={(Event)=>{paramsHandler(Event)}} className="bg-black text-white rounded-md p-1 hover:scale-105 duration-300"></input>
                <input placeholder="Font Color" onChange={(Event)=>{paramsHandler(Event)}} className="bg-black text-white rounded-md p-1 hover:scale-105 duration-300"></input>

            </div>
            {/* div which will contain the img */}
            <div className="">
                {loading ? (<Loader></Loader>) : (<img src={img} className="border border-black rounded-sm"></img>)}
            </div> 
        </div>
    );

};

export default GenerateBtn;
