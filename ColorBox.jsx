import {useState} from "react"
import "./ColorBox.css"

function randomChoice(arr){
    let randomIndex = Math.floor((Math.random() * arr.length))
    return arr[randomIndex]
}
export default function ColorBox({colors}){
    const [color, setColor] = useState(randomChoice(colors))
    const newColor = () => {
        const randColor = randomChoice(colors)
        
        setColor(randColor)
    }
    return (
        <div className="color-box"
         onClick = {newColor}
         style = {{backgroundColor : color}}>
            
        </div>
    )
}