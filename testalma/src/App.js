import React from "react";
import { Component } from "react";
import Card from "./Components/Card";
import SlotMachine from "./Components/SlotMachine";


export default class App extends Component {

  render() {
    return <>
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 h-screen">
      <h1 className="text-center text-3xl font-extrabold p-12">Slot Machine Game.</h1>

      <SlotMachine/>
</div>
    </>
  }
}

