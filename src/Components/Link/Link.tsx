import { SelectedPage } from "@/types/Shared";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
    children: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ children, selectedPage, setSelectedPage }: LinkProps) => {
    const lowerCase = children.toLowerCase().replace(/ /g, "") as SelectedPage;
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCase ? "text-primary-300" : ""
            } `}
            href={`#${lowerCase}`}
            onClick={() => setSelectedPage(lowerCase)}
        >
            {children}
        </AnchorLink>
    );
};

export default Link;
