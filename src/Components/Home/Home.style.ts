import tw from "twin.macro";

const MainSection = tw.section`
gap-16
bg-gray-20
py-12
md:max-h-full
md:pb-0
`;

const Paragraph = tw.p`
mt-8
text-sm
md:text-start
`;

const ImageMainHeaderDiv = tw.div`
md:flex
mx-auto
items-center
justify-center
w-5/6
md:h-5/6
`;

const MainHeaderDiv = tw.div`
z-10
mt-32
md:basis-4/5
`;

const HeadingsDiv = tw.div`
md:-mt-20

`;

const InnerHeadingsDiv = tw.div`
relative
`;

const Inner2HeadingsDiv = tw.div`
before:absolute
before:-top-20
md:before:content-evolvetext
before:z-[-1]
before:-left-20
`;

const ButtonsDiv = tw.div`
mt-8
flex
items-center
gap-8

`;

const ImageHederDiv = tw.div`
flex
basis-3/5
justify-center
md:z-10
md:ml-40
md:mt-16
md:justify-end
`;

const HomeImage = tw.div``;

const Sponsors = tw.div`
h-[150px]
w-full
bg-primary-100
py-10
`;

const SponsorsInner1 = tw.div`
mx-auto
w-5/6
`;

const SponsorsInner2 = tw.div`
flex
w-3/5
items-center
justify-between
gap-8
`;

export {
    MainSection,
    HomeImage,
    Sponsors,
    ImageHederDiv,
    MainHeaderDiv,
    ImageMainHeaderDiv,
    HeadingsDiv,
    InnerHeadingsDiv,
    Inner2HeadingsDiv,
    SponsorsInner1,
    SponsorsInner2,
    Paragraph,
    ButtonsDiv,
};
