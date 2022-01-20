import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import Home from "../Home";

describe("Home.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
