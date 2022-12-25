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

import Logo from "@/assets/Logo.png";
import MenuData from "@/Data/MenuData/MenuData";
import Link from "../Link/Link";

interface NavProps {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: NavProps) => {
    return (
        <Maindiv>
            <Nav>
                <Lefdiv>
                    <img src={Logo} alt="Logo" />
                    <Rightdiv>
                        <Menuiems>
                            {MenuData.map((item) => (
                                <Item key={item.id}>
                                    <Link
                                        children={item.name}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </Item>
                            ))}
                        </Menuiems>
                        <Rightinner>
                            <Signin>Sign in</Signin>
                            <button>Be Come a Member</button>
                        </Rightinner>
                    </Rightdiv>
                </Lefdiv>
            </Nav>
        </Maindiv>
    );
};

export default Navbar;
