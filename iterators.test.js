import {
    convertCharCodesToString,
    sumOfPositiveNumbers,
    findLargestNumber,
    allUpperCaseStrings,
} from "./iterators.js";

describe("convertCharCodesToString", () => {
    it("should return a string for an array of valid char codes", () => {
        expect(
            convertCharCodesToString([104, 111, 108, 105, 100, 97, 121])
        ).toBe("holiday");
        expect(convertCharCodesToString([109, 105, 108, 107])).toBe("milk");
    });

    it("should return an empty string for an empty array", () => {
        expect(convertCharCodesToString([])).toBe("");
    });
});

describe("sumOfPositiveNumbers", () => {
    test("returns the correct sum for array that's not empty", () => {
        expect(sumOfPositiveNumbers(["10", "20", "30"])).toBe(60);
        expect(sumOfPositiveNumbers(["-10", "-20", "-30"])).toBe(0);
        expect(sumOfPositiveNumbers(["-10", "0", "5", "3"])).toBe(8);
    });
    test("returns 0 for empty arr", () => {
        expect(sumOfPositiveNumbers([])).toBe(0);
    });
});

describe("allUpperCaseStrings", () => {
    test("returns true for all uppercase strings", () => {
        expect(allUpperCaseStrings(["ONE", "TWO"])).toBe(true);
    });

    test("returns false if at least one element is not all uppercase", () => {
        expect(allUpperCaseStrings(["HI", "No"])).toBe(false);
        expect(allUpperCaseStrings(["hi", "No", "yes"])).toBe(false);
        expect(allUpperCaseStrings(["hi", "no", "yes", "trUe"])).toBe(false);
    });

    test("returns false for an empty array", () => {
        expect(allUpperCaseStrings([])).toBe(false);
    });
});

describe("findLargestNumber", () => {
    test("returns largest number from number array", () => {
        expect(findLargestNumber([1, 2, 3, 4, 5])).toBe(5);
        expect(findLargestNumber([-10, -20, -30, -5])).toBe(-5);
        expect(findLargestNumber([100, 200, 300, 150, 250])).toBe(300);
        expect(findLargestNumber([0, -1, 1, -2, 2])).toBe(2);
        expect(findLargestNumber([1])).toBe(1);
    });

    test("returns 0 for an empty array", () => {
        expect(findLargestNumber([])).toBe(0);
    });
});
