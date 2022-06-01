import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import AboutWebsite from "../AboutWebsite";

describe("Home.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <AboutWebsite />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
