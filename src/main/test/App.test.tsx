import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import App from "../App";

describe("App.tsx", () => {
    it("renders the App without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
