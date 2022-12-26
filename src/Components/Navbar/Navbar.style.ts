import tw from "twin.macro";

const Maindiv = tw.div`
flex
justify-between
items-center
fixed
top-0
py-6
z-30
w-full
`;

const Nav = tw.div`
flex
justify-between
items-center
w-5/6
mx-auto
`;

const Lefdiv = tw.div`
flex
justify-between
items-center
w-full
gap-16
`;

const Rightdiv = tw.div`
flex
items-center
w-full
`;

const Menuiems = tw.div`
flex
justify-between
items-center
gap-8
text-sm
`;

const Item = tw.li` 
list-none
hover:text-red-600
hover:scale-125
transition
duration-300
`;

const Signin = tw.p`
font-bold
uppercase
`;

const Rightinner = tw.div`
justify-between
items-center
flex
gap-8
`;

const MainMobile = tw.div`
fixed
right-0
bottom-0
z-50
h-full
w-[300px]
bg-primary-100
drop-shadow-xl
`;

const CloseIcon = tw.div`
flex
justify-end
p-12
`;

const MobileMenuItems = tw.div`
ml-[33%]
flex
flex-col
gap-10
text-2xl
`;

export {
    Maindiv,
    Nav,
    Lefdiv,
    Rightdiv,
    Menuiems,
    Item,
    Signin,
    Rightinner,
    CloseIcon,
    MainMobile,
    MobileMenuItems,
};
