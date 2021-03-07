import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Paragraph = styled.p`
  color: white;
  font-size: ${props => props.size || '16px'};
  padding: 24px 60px;
  text-align: left;
`;

const PictureCard = ({ imgSrc, imgAlt, text, fontSize }) => (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} />
      <Paragraph size={fontSize}>{text}</Paragraph>
    </Wrapper>
);

export default PictureCard;