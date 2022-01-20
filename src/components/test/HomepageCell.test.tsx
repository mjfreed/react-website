import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import HomepageCell from "../HomepageCell";
import WLogo from "../../assets/WLogo.png";

const getRenderedHomepageCell = (single?: boolean) => {
    return render(
        <MemoryRouter>
            <HomepageCell
                image={WLogo}
                header="This is a header"
                subheader="This is a subheader"
                dateRange="Nov 2019 - Nov 2020"
                single={single}
            />
        </MemoryRouter>
    );
};

describe("HomepageCell.tsx", () => {
    it("renders without crashing", () => {
        const { container } = getRenderedHomepageCell();
        expect(container).toMatchSnapshot();
    });

    it("renders the correct text", () => {
        const { getByTestId } = getRenderedHomepageCell();

        expect(getByTestId("homepagecell-header").textContent?.includes("This is a header")).toBeTruthy();
        expect(getByTestId("homepagecell-subheader").textContent).toEqual("This is a subheader");
    });
});
