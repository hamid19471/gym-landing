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
justify-between
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
cursor-pointer
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

export { Maindiv, Nav, Lefdiv, Rightdiv, Menuiems, Item, Signin, Rightinner };
