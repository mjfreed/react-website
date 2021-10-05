import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItemProps, Menu, MenuItemProps } from "semantic-ui-react";
import { useHistory } from "react-router";
import { MenuLocation } from "../util/constants";
import "../App.css";

// TODO: Fix bug where pointer resets to home on refresh but history does not
// Maybe figure out the dropdown on hover thing

const Header: React.FC = () => {
    const history = useHistory();
    const [pointer, setPointer] = useState("home");

    const handleMenuClick = (event: React.SyntheticEvent, data: MenuItemProps | DropdownItemProps) => {
        const name = data.name ? data.name : "home";
        setPointer(name);
        history.push(MenuLocation[name]);
    };

    return (
        <div>
            <Menu fixed="top" pointing secondary>
                <Menu.Item active={pointer === "home"} as="a" name="home" text="Home" onClick={handleMenuClick} />
                <Dropdown item text="About">
                    <Dropdown.Menu>
                        <Dropdown.Item
                            active={pointer === "aboutMe"}
                            as="a"
                            name="aboutMe"
                            text="Me"
                            onClick={handleMenuClick}
                        />
                        <Dropdown.Item
                            active={pointer === "aboutWebsite"}
                            as="a"
                            name="aboutWebsite"
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
