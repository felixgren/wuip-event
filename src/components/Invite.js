import styled from 'styled-components';
import desktop from '../utils/breakpoints';
import PictureCard from './PictureCard';
import waterimg from '../images/water.png';
import water2img from '../images/water2.png';

const Wrapper = styled.div`
    ${desktop} {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 54px;
        padding: 24px;
    }
`;

const InvitationWrapper = styled.div`
    background-color: #80bccf;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 12px;
    padding: 32px 32px 64px;

    ${desktop} {
        background-color: transparent;
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;

const TextWrapper = styled.div`
    ${desktop} {
        background-color: #80bccf;
        padding: 64px 64px 13% 64px;
        margin: 0 0 24px 24px;
        height: 50%;
    }
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.25em;
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    font-size: ${(props) => props.size};

    ${desktop} {
        font-size: ${(props) => props.deskSize};
    }
`;

const ImageDesk = styled.img`
    display: none;
    ${desktop} {
        display: initial;
        width: 110%;
        height: 50%;
        margin-left: -10%;
    }
`;

const Invite = () => {
    const text = 'Join to get a sneak peek at the action-packed upcoming game.';
    const alt = 'Water world';

    return (
        <Wrapper>
            <InvitationWrapper>
                <TextWrapper>
                    <Paragraph size="20px" deskSize="36px">
                        Hello X!
                    </Paragraph>
                    <Paragraph size="16px" deskSize="24px">
                        Here’s a glimpse at some of the sensational scenery
                        you’ll see.
                    </Paragraph>
                    <Paragraph size="12px" deskSize="22px" mt="24px">
                        You are invited to climb through dozens of colorful
                        stages! Jump, dash, and roll your way through colorful
                        and suprising environments.
                    </Paragraph>
                </TextWrapper>
                <ImageDesk src={water2img} alt="water world" />
            </InvitationWrapper>

            <PictureCard
                fontSize="20px"
                height="50%"
                imgSrc={waterimg}
                imgAlt={alt}
                text={text}
            />
        </Wrapper>
    );
};

export default Invite;
