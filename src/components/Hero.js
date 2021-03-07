import styled from "styled-components";
import heroimgMob from "../images/iphone-hero.png";
import heroimgDesk from "../images/desktop-hero.png";
import ArrowIcon from "../icons/ArrowIcon";
import desktop from "../utils/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  background-color: #ffffff5c;
  top: 122px;
  left: 19px;
  width: 290px;

  ${desktop} {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 890px;
    left: 20%;
    top: 300px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 8px;

  ${desktop} {
    font-size: 40px;
  }
`;

const HeroImageMob = styled.img`
  width: 100%;

  ${desktop} {
    display: none;
  }
`;

const HeroImageDesk = styled.img`
  width: 100%;
  display: none;
  
  ${desktop} {
    display: initial;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-top: -54px;
  display: block;

  ${desktop} {
    & > path {
      fill: #56DDA8;
      stroke: transparent;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <Wrapper>
        <Paragraph>SUPER MARIO 3D WORLD</Paragraph>
        <Paragraph>+</Paragraph>
        <Paragraph>BOWSERS FURY: A JOYFUL CELEBRATION</Paragraph>
      </Wrapper>
      <HeroImageMob src={heroimgMob} alt="amazing" />
      <HeroImageDesk src={heroimgDesk} alt="amazing" />
      <StyledArrowIcon stroke="black" color="none" w="100%" h="24px" />
      <StyledArrowIcon stroke="black" color="none" w="100%" h="24px" />
    </>
  );
};

export default Hero;
