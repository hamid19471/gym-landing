import { SelectedPage } from "@/types/Shared";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ActionButtonProps {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white py-2 px-10"
            onClick={() => setSelectedPage(SelectedPage.Contactus)}
            href={`#${SelectedPage.Contactus}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;
