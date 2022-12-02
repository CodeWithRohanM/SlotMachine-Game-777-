import React, { Component } from "react";
import Card from "./Card";

export default class SlotMachine extends Component {

    constructor() {
        super()
        this.state = {
            emojiArray: [
                {
                    x: '😄',
                    y: '😄',
                    z: '😄',
                    keys: 1,
                },
                {
                    x: '🎅',
                    y: '😄',
                    z: '😄',
                    keys: 2
                },
                {
                    x: '😄',
                    y: '🍵',
                    z: '🍵',
                    keys: 3
                },
                {
                    x: '☕',
                    y: '☕',
                    z: '☕',
                    keys: 4
                }
            ]
        }
    }
    

    render() {

        let counter = 1, counter2 = 1;

        return <>

        <div className="grid grid-cols-3 flex gap-y-12 container mx-auto">
            {this.state.emojiArray.map((element, index) => {
                return (element.x == element.y && element.y == element.z) ? <Card key = {element.keys} cardNumber={index+1} X={element.x} Y={element.y} Z={element.z} printResult="Cards Are Matching" resultEmoji = '🔥 🔥 🔥'/> : <Card key = {element.keys} cardNumber={index+1} X={element.x} Y={element.y} Z={element.z} printResult= "Cards Did Not Match" resultEmoji = '👎 👎 👎'/>
            })}
            </div>

        </>



    }
}














































/*// const currentHour = new Date().getHours();

// let displayString = "";
// let getColor = "blue";

// if (currentHour >= 1 && currentHour < 12) {
//   displayString = "Good Morning!";
//   getColor = "green";
// }
// else if (currentHour > 12 && currentHour < 19) {
//   displayString = "Good Afternoon!!";
//   getColor = "yellow";

// }
// else {
//   displayString = "Good Night!!!";
//   getColor = "blue"
// }


// const add = (a,b)=> {
//   return a+b;
// }

// const sub = (a,b)=> {
//   return a-b;
// }

// const mul = (a,b)=> {
//   return a*b;
// }

// const div = (a,b)=> {
//   return (a/b).toFixed(2);
// }

// const arr = ["Jan","Feb","Mar","Apr","May",'Jun',"Jul","Aug","Sep","Oct","Nov", "Dec"];

// const secondArray = arr.map((element, index) =>{
//   return `The MonthAnother is = `+element+` and Index -> `+index;
// });

// console.log(secondArray);*/








{/* <h1 className="text-5xl text-center my-12 font-extrabold">Hello Sir, <span style={{ color: `${getColor}` }}>{displayString}</span></h1>

    <div className="container mx-auto text-3xl text-center">
      <h1> Addition 😄 = {add(10,3)}</h1>
      <h1> Subtraction 😒 = {sub(10,2)}</h1>
      <h1> Multiplication 🤑 = {mul(10,2)}</h1>
      <h1> Division = {div(10,3)}</h1> */}