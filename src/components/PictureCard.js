import styled from 'styled-components';
import desktop from '../utils/breakpoints';

const Wrapper = styled.div`
    ${(props) =>
        props.flex &&
        `
      ${desktop} {
        display: flex;
        flex-direction: ${props.flex};
        align-items: center;
        padding-bottom: 16px;
      }
  `};
`;

const Image = styled.img`
    width: 100%;
`;

const Paragraph = styled.p`
    color: white;
    font-size: ${(props) => props.size || '16px'};
    padding: 24px 60px;
    text-align: left;

    ${desktop} {
        font-size: 28px;
        line-height: 36px;
        width: ${(props) => (props.flex ? '800px' : '500px')};
        margin: ${(props) => (props.flex ? '0 70px' : '60px')};
    }
`;

const PictureCard = ({ imgSrc, imgAlt, text, fontSize, height, flex }) => (
    <Wrapper flex={flex}>
        <Image height={height} src={imgSrc} alt={imgAlt} />
        <Paragraph flex={flex} size={fontSize}>
            {text}
        </Paragraph>
    </Wrapper>
);

export default PictureCard;
