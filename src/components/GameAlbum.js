import styled from "styled-components";
import PictureCard from "./PictureCard";
import jumpingimg from "../images/jumping.png";
import grassimg from "../images/grass.png";

const Wrapper = styled.div`
    background-color: #56DDA8;
`;

const Fade = styled.div`
    width: 100%;
    height: 280px;
    margin-top: -100px;
    background: transparent linear-gradient(180deg, #1C547F 0%, #1C547F 22%, #56DDA8 100%) 0% 0% no-repeat;
`;

const CardWrapper = styled.div`
    margin: 16px 16px 0;
`;

const GameAlbum = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    const jumpingAlt = "Mario and friends securing victory";
    const grassAlt = "Mario and friends securing victory";

    return (
        <Wrapper>
            <Fade />
            <CardWrapper>
                <PictureCard imgSrc={jumpingimg} imgAlt={jumpingAlt} text={text} />
                <PictureCard imgSrc={grassimg} imgAlt={grassAlt} text={text} />
            </CardWrapper>
        </Wrapper>
    );
};

export default GameAlbum;
