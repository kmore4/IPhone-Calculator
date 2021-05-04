import React, { useState } from 'react';
import "./App.css";
import Button from "../Button";
import commafy from '../utils/commafy';

const App = () => {

    const [value, setvalue] = useState("0");

    const [memory, setMemory] = useState(null);

    const [operator, setOperator] = useState(null)

    const handleButtonPress = content => () => {
        const num = parseFloat(value);

        if (content==="AC"){
            setvalue("0");
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content==="±"){
            setvalue((num * -1).toString());
            return;
        }

        if (content==="%"){
            setvalue((num/100).toString());
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content==="."){
            if(value.includes('.')) return;

            setvalue(value + '.');
            return;
        }

        if (content==="+"){
            if(operator !== null){
                if (operator === "+"){
                    setMemory(memory + parseFloat(value));
                }
                else if (operator === "÷"){
                    setMemory(memory / parseFloat(value));
                }
                else if (operator === "×"){
                    setMemory(memory * parseFloat(value));
                }
                else if (operator === "−"){
                    setMemory(memory - parseFloat(value));
                }
            }
            else{
                setMemory(parseFloat(value));
            }
            
            setvalue("0");
            setOperator("+");
            return;
        }

        if (content==="÷"){
            if(operator !== null){
                if (operator === "+"){
                    setMemory(memory + parseFloat(value));
                }
                else if (operator === "÷"){
                    setMemory(memory / parseFloat(value));
                }
                else if (operator === "×"){
                    setMemory(memory * parseFloat(value));
                }
                else if (operator === "−"){
                    setMemory(memory - parseFloat(value));
                }
            }
            else{
                setMemory(parseFloat(value));
            }
            setvalue("0");
            setOperator("÷");
            return;
        }

        if (content==="×"){
            if(operator !== null){
                if (operator === "+"){
                    setMemory(memory + parseFloat(value));
                }
                else if (operator === "÷"){
                    setMemory(memory / parseFloat(value));
                }
                else if (operator === "×"){
                    setMemory(memory * parseFloat(value));
                }
                else if (operator === "−"){
                    setMemory(memory - parseFloat(value));
                }
            }
            else{
                setMemory(parseFloat(value));
            }
            setvalue("0");
            setOperator("×");
            return;
        }

        if (content==="−"){
            if(operator !== null){
                if (operator === "+"){
                    setMemory(memory + parseFloat(value));
                }
                else if (operator === "÷"){
                    setMemory(memory / parseFloat(value));
                }
                else if (operator === "×"){
                    setMemory(memory * parseFloat(value));
                }
                else if (operator === "−"){
                    setMemory(memory - parseFloat(value));
                }
            }
            else{
                setMemory(parseFloat(value));
            }
            setvalue("0");
            setOperator("−");
            return;
        }

        if (content==="="){
            if (!operator) return;

            if (operator === "+"){
                setvalue((memory + parseFloat(value)).toString());
            }
            else if (operator === "÷"){
                setvalue((memory / parseFloat(value)).toString());
            }
            else if (operator === "×"){
                setvalue((memory * parseFloat(value)).toString());
            }
            else if (operator === "−"){
                setvalue((memory - parseFloat(value)).toString());
            }
            
            setMemory(null);
            setOperator(null);
            return;
        }
        
        if(value[value.length - 1] === ".") {
            setvalue(value + content);
        }
        else{
            setvalue(parseFloat(num + content).toString());
        }

        
    };

    return <div className="App"> 
        <div className="top"> 4:43</div>
        <div className="display">{commafy(value)}</div>
        <div className="buttons"> 
            <Button onButtonClick={handleButtonPress} content="AC" type="function"/>
            <Button onButtonClick={handleButtonPress} content="±" type="function" />
            <Button onButtonClick={handleButtonPress} content="%" type="function"/>
            <Button onButtonClick={handleButtonPress} content="÷" type="operator"/>
            <Button onButtonClick={handleButtonPress} content="7"/>
            <Button onButtonClick={handleButtonPress} content="8"/>
            <Button onButtonClick={handleButtonPress} content="9"/>
            <Button onButtonClick={handleButtonPress} content="×" type="operator"/>
            <Button onButtonClick={handleButtonPress} content="4"/>
            <Button onButtonClick={handleButtonPress} content="5"/>
            <Button onButtonClick={handleButtonPress} content="6"/>
            <Button onButtonClick={handleButtonPress} content="−" type="operator"/>
            <Button onButtonClick={handleButtonPress} content="1"/>
            <Button onButtonClick={handleButtonPress} content="2"/>
            <Button onButtonClick={handleButtonPress} content="3"/>
            <Button onButtonClick={handleButtonPress} content="+" type="operator"/>
            <Button onButtonClick={handleButtonPress} content="0"/>
            <Button onButtonClick={handleButtonPress} content="."/>
            <Button onButtonClick={handleButtonPress} content="=" type="operator"/>

        </div>
    </div>
};

export default App;
