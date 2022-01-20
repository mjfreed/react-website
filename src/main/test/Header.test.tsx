import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import Header from "../Header";

const getRenderedHeader = () => {
    return render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
};

describe("Header.tsx", () => {
    it("renders without crashing", () => {
        const { container } = getRenderedHeader();
        expect(container).toMatchSnapshot();
    });

    it("contains all header items", () => {
        const { getByTestId } = getRenderedHeader();

        const buttons = [];

        buttons.push(getByTestId("header-home"));
        buttons.push(getByTestId("header-about"));
        buttons.push(getByTestId("header-contact"));

        buttons.forEach((button) => expect(button).toBeTruthy());
    });

    it("shows about dropdown menu when About button is clicked", async () => {
        const { getByTestId, findByTestId } = getRenderedHeader();

        const headerButton = getByTestId("header-about");
        fireEvent.click(headerButton);
        await act(async () => {
            expect(await findByTestId("header-about-me")).toBeTruthy();
        });

        await act(async () => {
            expect(await findByTestId("header-about-website")).toBeTruthy();
        });
    });
});
