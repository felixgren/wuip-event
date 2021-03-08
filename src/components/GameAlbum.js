import styled from 'styled-components';
import PictureCard from './PictureCard';
import jumpingimg from '../images/jumping.png';
import grassimg from '../images/grass.png';
import desktop from '../utils/breakpoints';

const Wrapper = styled.div`
    background-color: #56dda8;
`;

const Fade = styled.div`
    width: 100%;
    height: 280px;
    margin-top: -100px;
    position: relative;
    background: transparent
        linear-gradient(180deg, #1c547f 0%, #1c547f 22%, #56dda8 100%) 0% 0%
        no-repeat;

    ${desktop} {
        height: 500px;
        margin-top: -280px;
    }
`;

const CardWrapper = styled.div`
    margin: 16px 16px 0;
`;

const GameAlbum = () => {
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
    const jumpingAlt = 'Mario and friends securing victory';
    const grassAlt = 'Mario and friends securing victory';

    return (
        <Wrapper>
            <Fade />
            <CardWrapper>
                <PictureCard
                    flex="row"
                    imgSrc={jumpingimg}
                    imgAlt={jumpingAlt}
                    text={text}
                />
                <PictureCard
                    flex="row-reverse"
                    imgSrc={grassimg}
                    imgAlt={grassAlt}
                    text={text}
                />
            </CardWrapper>
        </Wrapper>
    );
};

export default GameAlbum;
