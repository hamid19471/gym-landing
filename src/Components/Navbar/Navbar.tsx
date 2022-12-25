import {
    Maindiv,
    Nav,
    Lefdiv,
    Rightdiv,
    Menuiems,
    Item,
    Signin,
    Rightinner,
} from "./Navbar.style";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import MenuData from "@/Data/MenuData/MenuData";
import Link from "../Link/Link";
import { SelectedPage } from "@/types/Shared";
import useMediaQuery from "@/Hooks/MediaQuery/MediaQuery";
import { useState } from "react";
interface NavProps {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: NavProps) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isMobileScreens = useMediaQuery("(min-width : 1060px)");
    return (
        <Maindiv>
            <Nav>
                <Lefdiv>
                    <img src={Logo} alt="Logo" />
                    <Rightdiv
                        className={`${
                            !isMobileScreens ? "justify-end" : "justify-between"
                        }`}
                    >
                        {isMobileScreens ? (
                            <>
                                <Menuiems>
                                    {MenuData.map((item) => (
                                        <Item key={item.id}>
                                            <Link
                                                children={item.name}
                                                selectedPage={selectedPage}
                                                setSelectedPage={
                                                    setSelectedPage
                                                }
                                            />
                                        </Item>
                                    ))}
                                </Menuiems>
                                <Rightinner>
                                    <Signin>Sign in</Signin>
                                    <button>Be Come a Member</button>
                                </Rightinner>
                            </>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </Rightdiv>
                </Lefdiv>
            </Nav>
        </Maindiv>
    );
};

export default Navbar;
