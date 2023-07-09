
import './App.css'
//import Greetings from "./Greetings.jsx"
//import Die from "./Die"
//import ListArray from "./ListArray"
//import ColorList from './ColorList'
//import ShoppingList from './ShoppingList'
//import RentalProperties from './RentalProperties';
//import Toggle from './Toggle'
import ColorBoxGrid from "./ColorBoxGrid"

function App() {

    const colors = [
        "#E53935",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
      ];
    // const data = [
    //     {id: 1, item : "eggs", quantity: 12, completed : false},
    //     {id: 2, item : "carrot", quantity: 8, completed : false},
    //     {id: 3, item : "onion", quantity: 20, completed : true},
    //     {id: 4, item : "bread", quantity: 2, completed : true},
    //     {id: 5, item : "apple", quantity: 4, completed : false}
    // ]

    // const properties = [
    //     { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    //     { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    //     { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    //     { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    //     { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    //     { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
    //   ];

    return ( 
        <>

        <ColorBoxGrid colors = {colors}></ColorBoxGrid>
        {/* <Toggle></Toggle> */}
        {/* <Greetings person = "Bill"/>
        <Greetings person = "Pranit"></Greetings> */}
        {/* <Die numSides = {10}></Die>
        <Die numSides = {20}></Die>
        <Die numSides = {6}></Die> */}
        {/* <ListArray values = {[1,2,3,4]}></ListArray>
        <ListArray values = {['a','b','c','d','e','f','g']}></ListArray>
        <ListArray values = {[1,2,3,4]}></ListArray>
        <ListArray values = {['a','b','c','d','e','f','g']}></ListArray>
        <ListArray values = {[1,2,3,4]}></ListArray>
        <ListArray values = {['a','b','c','d','e','f','g']}></ListArray>
        <ColorList colors = {["red", "green", "blue", "purple", "yellow", "brown","black"]}></ColorList> */}
        {/* <ShoppingList items = {data}></ShoppingList> */}
        {/* <RentalProperties properties = {properties}></RentalProperties> */}
        </>
    )
}

export default App