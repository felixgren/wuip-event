import styled from 'styled-components';
import Hero from './Hero';
import Invite from './Invite';
import SignUp from './SignUp';
import EvilBowser from './EvilBowser';
import GameAlbum from './GameAlbum';
import Footer from './Footer';

const BackgroundWrapper = styled.div`
    background: transparent linear-gradient(270deg, #56dda800 0%, #56dda8 100%) 0%
    0% no-repeat padding-box;
`;

const PageWrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    text-align: center;
`;

function App() {
    return (
        <BackgroundWrapper>
            <PageWrapper>
                <Hero />
                <Invite />
                <SignUp />
                <EvilBowser />
                <GameAlbum />
                <Footer />
            </PageWrapper>
        </BackgroundWrapper>
    );
}

export default App;
