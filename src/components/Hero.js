import styled from "styled-components";
import heroimg from "../images/iphone-hero.png";
import ArrowIcon from "../icons/ArrowIcon";

const HeroTextWrapper = styled.div`
  position: absolute;
  background-color: #ffffff5c;

  top: 122px;
  left: 19px;
  width: 292px;
  height: 130px;
`;

const HeroText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 0px;
  padding: 5px;
  font-family: "Museo";
`;

const HeroImage = styled.img`
  width: 100%;
  /* background-color: #56dda8; */
  background: transparent linear-gradient(270deg, #56dda800 0%, #56dda8 100%) 0%
    0% no-repeat padding-box;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-top: -50px;
  display: block;
  width: 100%;
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
      <StyledArrowIcon color="none" w="46" h="24px" />
      <StyledArrowIcon color="none" w="46" h="24px" />
    </>
  );
};

export default Hero;
