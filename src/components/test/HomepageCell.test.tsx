import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import WLogo from "../../assets/WLogo.png";
import HomepageCell from "../HomepageCell";

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
        expect(getByTestId("homepagecell-date-range").textContent).toEqual("Nov 2019 - Nov 2020");
    });

    it("renders with the correct style", () => {
        let result = getRenderedHomepageCell();
        expect(result.getByTestId("homepagecell-header-col")).toHaveClass("center aligned six wide column");
        result.unmount();

        // render Homepagecell with single attribute
        result = getRenderedHomepageCell(true);
        expect(result.getByTestId("homepagecell-header-col")).toHaveClass("center aligned four wide column");
    });
});
