import { useState } from "react";
import { isFizz } from "./logic";
import { isBuzz } from "./logic";

export default function FizzBuzz(): JSX.Element {
  const [currentNumber, queueNumber] = useState(1);
  const [currentArray, queueArray] = useState<(number | string)[]>([]);

  const handleNext = () => {
    queueNumber(currentNumber + 1);
    handleValue();
  };

  const handleValue = () => {
    if (isFizz(currentNumber) && isBuzz(currentNumber)) {
      queueArray([...currentArray, "FizzBuzz, "]);
    } else if (isFizz(currentNumber)) {
      queueArray([...currentArray, "Fizz, "]);
    } else if (isBuzz(currentNumber)) {
      queueArray([...currentArray, "Buzz, "]);
    } else {
      queueArray([...currentArray, currentNumber + ", "]);
    }
  };
  return (
    <>
      <h1>FizzBuzz App</h1>
      <button onClick={handleNext}>NEXT</button>
      <p>{currentArray}</p>
    </>
  );
}
