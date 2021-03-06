import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  padding: 24px 64px;
  text-align: left;
`;

const PictureCard = ({ imgSrc, imgAlt, text  }) => {
  return(
      <Wrapper>
        <Image src={imgSrc} alt={imgAlt} />
        <Paragraph>{text}</Paragraph>
      </Wrapper>
  );
}

export default PictureCard;