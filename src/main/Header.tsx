import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Dropdown, DropdownItemProps, Menu, MenuItemProps } from "semantic-ui-react";
import "../App.css";
import { MenuLocation } from "../util/constants";

// TODO: Maybe figure out the dropdown on hover thing

const Header: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const [pointer, setPointer] = useState(getInitialPointer);

    // If the user first visits the webiste from a path that is
    // not root, set the header pointer corresponding to pathname
    function getInitialPointer() {
        const pointer = location.pathname.split("/").pop();
        return pointer === "" ? "home" : pointer;
    }

    const handleMenuClick = (event: React.SyntheticEvent, data: MenuItemProps | DropdownItemProps) => {
        const name = data.name ? data.name : "home";
        console.log("name: ", name);

        localStorage.setItem("pointer", name);
        setPointer(name);

        history.push(MenuLocation[name]);
        console.log("pointer", pointer);
    };

    return (
        <div>
            <Menu fixed="top" size="massive" pointing secondary>
                <Menu.Item active={pointer === "home"} as="a" name="home" text="Home" onClick={handleMenuClick} />
                <Dropdown item text="About">
                    <Dropdown.Menu>
                        <Dropdown.Item
                            active={pointer === "about"}
                            as="a"
                            name="about"
                            text="Me"
                            onClick={handleMenuClick}
                        />
                        <Dropdown.Item
                            active={pointer === "about:website"}
                            as="a"
                            name="about:website"
                            text="Website"
                            onClick={handleMenuClick}
                        />
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    active={pointer === "contact"}
                    as="a"
                    name="contact"
                    text="Contact"
                    onClick={handleMenuClick}
                />
            </Menu>
        </div>
    );
};

export default Header;