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

type Props = {};

const Navbar = (props: Props) => {
    return (
        <Maindiv>
            <Nav>
                <Lefdiv>
                    <img src={Logo} alt="Logo" />
                    <Rightdiv>
                        <Menuiems>
                            {MenuData.map((item) => (
                                <Item key={item.id}>{item.name}</Item>
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
