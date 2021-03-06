/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
} from "../functions";

describe("sumOdds(numbers)", () => {
  test("returns the sum of only the ODD numbers.", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const oddSum = 36;
    expect(sumOdds(numbers)).toEqual(oddSum);
  });
});

describe("characterCount(string, c)", () => {
  test("returns the number of times a character `c` occurs in a string.", () => {
    const string = "aaaebc";
    const c = "a";
    const times = 3;
    expect(characterCount(string, c)).toEqual(times);
  });

  test("string is case-insensitive.", () => {
    const string = "aAaebc";
    const c = "a";
    const times = 3;
    expect(characterCount(string, c)).toEqual(times);
  });

  test("c is case-insensitive.", () => {
    const string = "aAaebc";
    const c = "A";
    const times = 3;
    expect(characterCount(string, c)).toEqual(times);
  });
});

/*
describe("differences(numbers)", () => {
  test("returns an array with the correct length (one less than the numbers array.)", () => {
    const numbers = [1, 3, 7, 9, 19];
    const diffArray = [2, 4, 2, 10];
    expect(differences(numbers).length).toEqual(diffArray.length);
  });
  test("returns an array that has the difference in the values of the numbers array.", () => {
    const numbers = [1, 3, 7, 9, 19];
    const diffArray = [2, 4, 2, 10];
    expect(differences(numbers)).toEqual(diffArray);
  });
});
*/

describe("largestIncrement(numbers)", () => {
  test("returns the largest difference between two consecutive numbers in an array.", () => {
    const numbers = [1, 3, 7, 9, 19];
    const largestInc = 10;
    expect(largestIncrement(numbers)).toEqual(largestInc);
  });
});

describe("afterX(numbers, x)", () => {
  test("returns an array of every number in `numbers` that occurs after `x`.", () => {
    const numbers = [1, 3, 7, 9, 19];
    const x = 3;
    const arrayAfterX = [7, 9, 19];
    expect(afterX(numbers, x)).toEqual(arrayAfterX);
  });
});

describe("abbreviate(firstName, lastName)", () => {
  test("returns the correct initials of a name", () => {
    const firstName = "Mickey";
    const lastName = "Singer";
    const initials = "MS";
    expect(abbreviate(firstName, lastName)).toEqual(initials);
  });

  test("returns the correct initials of a name in uppercase", () => {
    const firstName = "mickey";
    const lastName = "singer";
    const initials = "MS";
    expect(abbreviate(firstName, lastName)).toEqual(initials);
  });
});

describe("isUpperCase(string)", () => {
  test("returns false if string is not uppercase", () => {
    const string = "mickey";
    expect(isUpperCase(string)).toEqual(false);
  });

  test("returns true if string is uppercase", () => {
    const string = "MICKEY";
    expect(isUpperCase(string)).toEqual(true);
  });
});

describe("elementInArray(numbers, x)", () => {
  test("returns true if `x` is found in the array.", () => {
    const numbers = [1, 2, 3, 4, 5];
    const x = 4;
    expect(elementInArray(numbers, x)).toEqual(true);
  });

  test("returns false if `x` is NOT found in the array.", () => {
    const numbers = [1, 2, 3, 4, 5];
    const x = 8;
    expect(elementInArray(numbers, x)).toEqual(false);
  });
});

/*
describe("reverseString(string)", () => {
  test("returns the reverse of a string.", () => {
    const string = "rfvwkev";
    const reversed = "vekwvfr";
    expect(reverseString(string)).toEqual(reversed);
  });
});
*/
