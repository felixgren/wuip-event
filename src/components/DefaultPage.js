import logo from '../logo.svg';
import styled from 'styled-components';

const AppLol = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    /* CSS */
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const AppLink = styled.a`
    color: #61dafb;
`;

const Default = () => {
    return (
        <AppLol>
            <AppHeader>
                <AppLogo src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload. YAAAAA yes
                </p>
                <AppLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </AppLink>
            </AppHeader>
        </AppLol>
    );
};

export default Default;
