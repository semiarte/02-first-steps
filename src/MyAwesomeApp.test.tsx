import {describe, expect, test} from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test("should render firstName", () => {
        render(<MyAwesomeApp />);
        // screen.debug();

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Fernando');
    });

    test("should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />)
        expect(container).toMatchSnapshot();
    })
})