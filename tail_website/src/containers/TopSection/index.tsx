import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/NavBar";
import BgImage from "../../images/indonesia-high-res.jpg";
import LinearGradient from 'react-native-linear-gradient';

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `};
`;

const LandingSection = styled.div`
    ${tw`
        w-full
        h-screen
        flex
        flex-col
    `};

    
    background-image: url(${BgImage});
        background-size: cover;
        background-position: bottom 10% left;
        background-blend-mod: overlay;
`;

const Gradient = styled.div`
    background: linear-gradient(45deg, blue, red);
;`

export function TopSection() {
    return <TopSectionContainer>
        <LandingSection>
            <Gradient>
                <NavBar/>
            </Gradient>
        </LandingSection>
    </TopSectionContainer>;
}