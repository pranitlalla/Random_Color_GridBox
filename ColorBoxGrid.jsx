import ColorBox from "./ColorBox"
import "./ColorBoxGrid.css"
export default function ColorBoxGrid({colors}){
    const box = [];
    for(let i = 0; i< 25; i++)
    {
        box.push(<ColorBox colors = {colors}></ColorBox>)
    }
    return (
        <div className = "ColorGrid">
               {box}
        </div>
    )
}