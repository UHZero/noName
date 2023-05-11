import Button from "./Button";
import Display from "./Display";
import Home from "./hooks/Home";

export default function Calculator () {
    const { value, inputNumber, clear, decimalInput, equalsEvaluated, operatorInput } = Home();
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
            <div className="h-20 w-80">
                <Display value={ value } />
            </div>
            <div className="grid grid-cols-4">
                <Button value="AC" onClick={clear} triple />
                <Button value="/" onClick={operatorInput} />
                <Button value="7" onClick={inputNumber} />
                <Button value="8" onClick={inputNumber} />
                <Button value="9" onClick={inputNumber} />
                <Button value="*" onClick={operatorInput} />
                <Button value="4" onClick={inputNumber} />
                <Button value="5" onClick={inputNumber} />
                <Button value="6" onClick={inputNumber} />
                <Button value="-" onClick={operatorInput} />
                <Button value="3" onClick={inputNumber} />
                <Button value="2" onClick={inputNumber} />
                <Button value="1" onClick={inputNumber} />
                <Button value="+" onClick={operatorInput} />
                <Button value="0" onClick={inputNumber} double />
                <Button value="." onClick={decimalInput} />
                <Button value="=" onClick={equalsEvaluated} />
            </div>
        </div>
    )
}