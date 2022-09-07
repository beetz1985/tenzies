import React from "react";
import Dice from "./Dice";


function App(){

    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    function randomDiceValue() {
        return Math.ceil(Math.random() * 6)
    }



    function allNewDice() {
        const newArr = [];

        let i;
        for(i = 0; i < 10; i++) {
            const die = {
                number: randomDiceValue(),
                locked: false,
                id: i + 1
            }
            newArr.push(die);
        }
        return newArr;
    }



    function handleToggle(e) {
        setDice((s)=>{
            const newArr = [...s];
            newArr[(e.target.id - 1)].locked = (newArr[(e.target.id - 1)].locked) ? false : true;

            //If all cubes filled in set tenzies state to true
            if(newArr.every(v=>v.locked === true)) setTenzies(true);

            return newArr;
        })
    }


    function handleRoll(e) {
        setDice((s)=>{
            const newArr = [...s];
            newArr.map((v)=>v.number = (v.locked) ? v.number : randomDiceValue())
            console.log(newArr)
            return newArr
        })
    }

    function handleReset(e) {
        setDice(allNewDice());
        setTenzies(false);
    }


    const diceElements = dice.map((v, i)=>{
        return <Dice key={i} id={v.id} toggle={handleToggle} number={v.number} locked={v.locked}/>
    })

    return (
        <div className="wrapper">
            <div className="container">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                {tenzies 
                    ? <button className="roll-btn" onClick={handleReset}>Reset</button> 
                    : <button className="roll-btn" onClick={handleRoll}>Roll</button>}
                
            </div>
        </div>
    )
}

export default App