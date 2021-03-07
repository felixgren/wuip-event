import styled from "styled-components";
import bowserimg from "../images/bowser-dark.png";
import marioimg from "../images/Mario-body.png";
import bellimg from "../images/super-bell.png";

const Wrapper = styled.div`
    background-color: #1C547F;
`;

const Image = styled.img`
  width: 100%;
  ${props => props.mt && `margin-top: ${props.mt}`};
`;

const ImageWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    right: 32px;
    margin-top: -80px;
    & > img {
        width: 50%;
    }
    & > img:first-child {
        width: 60%;
        align-self: flex-end;
    }
`;

const Paragraph = styled.p`
  color: black;
  font-size: 10px;
  line-height: 20px;
  padding: 40px 54px;
  text-align: left;
  max-width: 83%;
`;

const EvilBowser = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
  return(
      <Wrapper>
        <Image mt="-50px" src={bowserimg} alt="dark bowser" />
        <Paragraph>{text}</Paragraph>

        <ImageWrapper>
            <Image src={marioimg} alt="mario basic" />
            <Image src={bellimg} alt="super bell" />
        </ImageWrapper>
      </Wrapper>
  );
}

export default EvilBowser;