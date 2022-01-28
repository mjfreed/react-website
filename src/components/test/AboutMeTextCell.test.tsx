import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { dummyText } from "../../assets/text/text";
import AboutMeTextCell from "../AboutMeTextCell";

describe("AboutMePhotoCell.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <AboutMeTextCell header="Hello, World!" bodyText={dummyText} />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });
});
