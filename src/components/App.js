import styled from 'styled-components';
import DefaultPage from './DefaultPage'

const AppLol = styled.div`
  text-align: center;
`;

function App() {
    return (
        <AppLol>
            <DefaultPage />
        </AppLol>
    );
}

export default App;
