import styled from 'styled-components';
import Hero from './Hero';
import Invite from './Invite';
import SignUp from './SignUp';

const PageWrapper = styled.div`
  text-align: center;
  background: transparent linear-gradient(270deg, #56dda800 0%, #56dda8 100%) 0%
  0% no-repeat padding-box;
`;

function App() {
    return (
        <PageWrapper>
            <Hero />
            <Invite />
            <SignUp />
        </PageWrapper>
    );
}

export default App;
