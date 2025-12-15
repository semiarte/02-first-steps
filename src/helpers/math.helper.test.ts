import { expect, test, describe } from "vitest";
import {add, subtract, multiply} from "./math.helper.ts";

describe('add', () => {
    test('should add two positive numbers', () => {
        // ! 1. Arrange
        const a: number = 1;
        const b: number = 2;
        // !2 Act
        const result = add(a, b);
        // !3 Assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        // ! 1. Arrange
        const a: number = -2;
        const b: number = -4;
        // !2 Act
        const result = add(a, b);
        // !3 Assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        const a: number = 2;
        const b: number = 4;

        const result = subtract(a, b);
        // console.log({ result })

        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        const a: number = -4;
        const b: number = -2;

        const result = subtract(a, b);
        // console.log({ result })

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        const a: number = 2;
        const b: number = 4;

        const result = multiply(a, b);
        // console.log({ result })

        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers', () => {
        const a: number = -4;
        const b: number = -2;

        const result = multiply(a, b);
        // console.log({ result })

        expect(result).toBe(a * b);
    });
});