import styled from "styled-components";
import desktop from "../utils/breakpoints";

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Paragraph = styled.p`
  color: white;
  font-size: ${props => props.size || '16px'};
  padding: 24px 60px;
  text-align: left;

  ${desktop} {
    font-size: 28px;
    width: 500px;
    margin: 20% 10%;
  }
`;

const PictureCard = ({ imgSrc, imgAlt, text, fontSize, height }) => (
    <Wrapper>
      <Image height={height} src={imgSrc} alt={imgAlt} />
      <Paragraph size={fontSize}>{text}</Paragraph>
    </Wrapper>
);

export default PictureCard;