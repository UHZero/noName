import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState("0")
    const [prev, setPrev] = useState("")
    const [operator, setOperator] = useState("")

    function inputNumber (n: string) {
        if(value === "0"){
            setValue(n)
        } else {
            setValue(number => number + n)
        }
    }

    function decimalInput() {
        if(!value.includes(".")) setValue(value + ".")
    }

    function operatorInput(op: string) {
        setPrev(value)
        setValue("0")
        setOperator(op)
    }

    function equalsEvaluated () {
        const current = parseFloat(value)
        const prevValue = parseFloat(prev)

        if(operator === "+") {
            setValue((prevValue + current).toString())
        } else if(operator === "-") {
            setValue((prevValue - current).toString())
        } else if(operator === "*") {
            setValue((prevValue * current).toString())
        } else if(operator === "/") {
            setValue((prevValue / current).toString())
        }
    }

    function clear () {
        setValue("0")
        setPrev("")
        setOperator("")
    }

    return {
        value,
        inputNumber,
        decimalInput,
        operatorInput,
        equalsEvaluated,
        clear
    }
}