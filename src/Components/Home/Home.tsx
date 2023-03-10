import React from "react";
import { SelectedPage } from "@/types/Shared";
import ActionButton from "../ActionButton/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/Hooks/MediaQuery/MediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import { motion } from "framer-motion";
// STYLES
import {
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
} from "./Home.style";

interface HomePropsType {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: HomePropsType) => {
    const mediaQuery = useMediaQuery("(min-width:1060px)");
    return (
        <MainSection id="home">
            <ImageMainHeaderDiv>
                <MainHeaderDiv>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -90 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HeadingsDiv>
                            <InnerHeadingsDiv>
                                <Inner2HeadingsDiv>
                                    <img
                                        src={HomePageText}
                                        alt="Home-Section-Image"
                                    />
                                </Inner2HeadingsDiv>
                            </InnerHeadingsDiv>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis iste ipsum, odio
                                aliquam sit minus eligendi qui eaque modi
                                facilis maiores? Nesciunt, voluptates enim
                                laboriosam mollitia architecto eaque aliquid
                                eligendi. Odio reprehenderit culpa ea saepe
                                adipisci tempore neque quisquam voluptate.
                            </Paragraph>
                        </HeadingsDiv>
                    </motion.div>
                    <ButtonsDiv>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
                            onClick={() =>
                                setSelectedPage(SelectedPage.Contactus)
                            }
                            href={`#${SelectedPage.Contactus}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </ButtonsDiv>
                </MainHeaderDiv>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.9, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <ImageHederDiv>
                        <img src={HomePageGraphic} alt="Home-PageGraphic" />
                    </ImageHederDiv>
                </motion.div>
            </ImageMainHeaderDiv>
            {mediaQuery && (
                <Sponsors>
                    <SponsorsInner1>
                        <SponsorsInner2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 0.7, duration: 0.7 }}
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <img src={SponsorRedBull} alt="RedBull" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 1, duration: 0.7 }}
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <img src={SponsorFortune} alt="Fortune" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: 1.3, duration: 0.7 }}
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <img src={SponsorForbes} alt="Forbes" />
                            </motion.div>
                        </SponsorsInner2>
                    </SponsorsInner1>
                </Sponsors>
            )}
        </MainSection>
    );
};

export default Home;
