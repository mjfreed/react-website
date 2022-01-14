import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Header from "../main/Header";

describe("Header.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    it("contains all header items", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const buttons = [];

        buttons.push(getByTestId("header-home"));
        buttons.push(getByTestId("header-about"));
        buttons.push(getByTestId("header-contact"));

        buttons.forEach((button) => expect(button).toBeTruthy());
    });
});
