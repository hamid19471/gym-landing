import {
    Maindiv,
    Nav,
    Lefdiv,
    Rightdiv,
    Menuiems,
    Item,
    Signin,
    Rightinner,
    MainMobile,
    CloseIcon,
    MobileMenuItems,
} from "./Navbar.style";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import MenuData from "@/Data/MenuData/MenuData";
import Link from "../Link/Link";
import { SelectedPage } from "@/types/Shared";
import useMediaQuery from "@/Hooks/MediaQuery/MediaQuery";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
interface NavProps {
    isTopPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }: NavProps) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isMobileScreens = useMediaQuery("(min-width : 1060px)");
    const changeBackground = isTopPage ? "" : "bg-primary-100 drop-shadow";
    return (
        <Maindiv className={`${changeBackground}`}>
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
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Be Come a Member
                                    </ActionButton>
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
                {!isMobileScreens && isMenuToggled && (
                    <MainMobile>
                        <CloseIcon>
                            <button
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                            </button>
                        </CloseIcon>
                        <MobileMenuItems>
                            {MenuData.map((item) => (
                                <Item key={item.id}>
                                    <Link
                                        children={item.name}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </Item>
                            ))}
                        </MobileMenuItems>
                    </MainMobile>
                )}
            </Nav>
        </Maindiv>
    );
};

export default Navbar;
