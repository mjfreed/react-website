import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import AboutMe from "../AboutMe";

describe("Home.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <AboutMe />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
