import React from "react";

export default function Secondpage(){
    return(
        <div className="container">
            <div className="head">
                <h2>Question</h2>
                <p className="para">1 of 15</p>
                <h4>Which is only mammal that can jump?</h4>
            </div>
            <div className="buttons">
                <ol className="button-collection">
                    <li><button className="btns">Dog</button></li>
                    <li><button className="btns">Elephant</button></li>
                    <li><button className="btns">Goat</button></li>
                    <li><button className="btns">Lion</button></li>
                </ol>
            </div>
            <div className="bottom">
                <div className="flex">
                <button className="btn3">Previous</button>
                <button className="btn4">Next</button>
                <button className="btn5">Quit</button>
                </div>
            </div>

        </div>
    )
}