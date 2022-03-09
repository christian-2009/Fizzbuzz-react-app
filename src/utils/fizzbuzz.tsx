import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [currentNumber, queueNumber] = useState(1);
  const [currentArray, queueArray] = useState<(number | string)[]>([]);

  const handleNext = () => {
    queueNumber(currentNumber + 1);
    handleValue();
  };

  const handleValue = () => {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      queueArray([...currentArray, "FizzBuzz, "]);
    } else if (currentNumber % 3 === 0) {
      queueArray([...currentArray, "Fizz, "]);
    } else if (currentNumber % 5 === 0) {
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
