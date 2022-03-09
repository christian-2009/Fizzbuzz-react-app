import { isFizz } from "./logic";
import { isBuzz } from "./logic";

test("isFuzz returns true if the number is divisible by 3", () => {
  expect(isFizz(3)).toBe(true);
  expect(isFizz(15)).toBe(true);
  expect(isFizz(60)).toBe(true);
});

test("isBuzz returns true if the number is divisible by 5", () => {
  expect(isBuzz(5)).toBe(true);
  expect(isBuzz(15)).toBe(true);
  expect(isBuzz(50)).toBe(true);
});
