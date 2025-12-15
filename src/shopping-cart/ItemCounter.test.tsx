import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ItemCounter } from "./ItemCounter.tsx";


describe("ItemCounter", () => {
    test("should increase count when +1 button is pressed", () => {
        // Add
        render(<ItemCounter name={'Test item'} quantity={1} />);
        const [buttonAdd] = screen.getAllByRole('button');
        // Act
        fireEvent.click(buttonAdd);
        // Assert
        expect(screen.getByText('2')).toBeDefined();
    });

    test("should decrease count when -1 button is pressed", () => {
        // Add
        render(<ItemCounter name={'Test item'} quantity={5} />);
        const [, buttonSubtract] = screen.getAllByRole('button');
        // Act
        fireEvent.click(buttonSubtract);
        // Assert
        expect(screen.getByText('4')).toBeDefined();
    });

    test("should not decrease count when button is pressed and quantity is 1", () => {
        // Add
        render(<ItemCounter name={'Test item'} quantity={1} />);
        const [, buttonSubtract] = screen.getAllByRole('button');
        // Act
        fireEvent.click(buttonSubtract);
        // Assert
        expect(screen.getByText('1')).toBeDefined();
    });
});