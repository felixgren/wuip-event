import styled from 'styled-components';
import Hero from './Hero'

const PageWrapper = styled.div`
  text-align: center;
`;

function App() {
    return (
        <PageWrapper>
            <Hero />
        </PageWrapper>
    );
}

export default App;
