import styled from "styled-components";
import heroimg from "../images/iphone-hero.png";
import ArrowIcon from "../icons/ArrowIcon";

const HeroTextWrapper = styled.div`
  position: absolute;
  background-color: #ffffff5c;
  top: 122px;
  left: 19px;
  width: 292px;
`;

const HeroText = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 8px;
`;

const HeroImage = styled.img`
  width: 100%;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-top: -54px;
  display: block;
`;

const Hero = () => {
  return (
    <>
      <HeroTextWrapper>
        <HeroText>SUPER MARIO 3D WORLD</HeroText>
        <HeroText>+</HeroText>
        <HeroText>BOWSERS FURY: A JOYFUL CELEBRATION</HeroText>
      </HeroTextWrapper>
      <HeroImage src={heroimg} alt="amazing" />
      <StyledArrowIcon stroke="black" color="none" w="100%" h="24px" />
      <StyledArrowIcon stroke="black" color="none" w="100%" h="24px" />
    </>
  );
};

export default Hero;
