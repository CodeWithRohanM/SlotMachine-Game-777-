import React from "react";

import { Component } from "react";

export default class Card extends Component {

    render() {


        return <>

            <div className="text-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card {this.props.cardNumber}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{this.props.X} {this.props.Y} {this.props.Z}</h5>
                    <p className="text-gray-700 text-base mb-4" id="displayResult">{this.props.printResult}</p>
                    <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{this.props.resultEmoji}</button>
                </div>
            </div>


        </>
    }
}