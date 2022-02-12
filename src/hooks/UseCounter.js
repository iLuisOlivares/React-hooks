import { useState } from "react";

export const UseCounter = (numberInitial = 10) => {

    const [counter, setCounter] = useState(numberInitial);

    const increment = (number = 1) => {
        setCounter(counter + number);
    }

    const decrement = (number = 1) => {
        setCounter(counter - number);
    }
    const reset = () => {
        setCounter(numberInitial);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

};
