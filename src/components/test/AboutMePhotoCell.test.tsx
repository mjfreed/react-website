import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import ReactLogo from "../../assets/logo512.png";
import AboutMePhotoCell from "../AboutMePhotoCell";

describe("AboutMePhotoCell.tsx", () => {
    it("renders without crashing", () => {
        const { container } = render(
            <MemoryRouter>
                <AboutMePhotoCell imageSrc={ReactLogo} />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });
});
