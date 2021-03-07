import styled from "styled-components";
import nintendo from "../images/Nintendo_logo_red.png";
import mariologo from "../images/supermario-logo.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";

const FooterComp = styled.footer`
  background-color: #56DDA8;
  padding: 64px 0;
`;

const Wrapper = styled.div`
  width: 125px;
  margin: auto;
  margin-bottom: 80px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100px;
  margin: auto;
`;

const CompanyImage = styled.img`
  align-items: center;
  width: 120px;
  margin-bottom: 12px;
`;

const SocialIcon = styled.img`
  width: 32px;
  margin: 8px;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 10px;
  margin-bottom: 8px;
`;

const Footer = () => {
    return (
        <FooterComp>
          <Wrapper>
            <CompanyImage src={nintendo} alt="Nintendo logo" />
            <CompanyImage src={mariologo} alt="Super Mario logo" />
          </Wrapper>

          <Paragraph>Follow Nintendo</Paragraph>
          <SocialWrapper>
            <SocialIcon src={instagram} alt="Instagram icon" />
            <SocialIcon src={facebook} alt="Facebook icon" />
            <SocialIcon src={youtube} alt="Foutube icon" />
            <SocialIcon src={twitter} alt="Twitter icon" />
          </SocialWrapper>
        </FooterComp>
    );
};

export default Footer;