import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import desktop from "../utils/breakpoints";

const Wrapper = styled.div`
  padding-bottom: 64px;
  ${desktop} {
    display: flex;
    flex-direction: column;
  }
`;

const Form = styled.form`
  margin-top: 30px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: ${props => props.w ? props.w : '80%'};
  height: 44px;
  margin-top: 12px;
  background-color: ${props => props.color ? props.color : 'white'};
  text-align: left;
  border: none;
  border-radius: 4px;
  padding: 8px;
  transition: 0.3s;
  outline: 0px solid #1C547F; 

  ${desktop} {
    font-size: 31px;
    height: 50px;
    margin-top: 16px;
    width: ${props => props.w ? props.w : '63%'};
  }

  &::placeholder {
    padding: 8px;
  }

  &:hover {
    opacity: 0.8;
    outline-offset: 4px;
    outline: 3px solid #1C547F;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)`
  ${desktop} {
    width: 44%;
    height: 42px;
    margin-bottom: 10px;
    transition: 0.2s;
    
    &:hover {
      transform: scale(1.4);
    }
  }
`;

const SignUp = () => {
  return (
    <Wrapper>
      <StyledArrowIcon color="#56DDA8" w="100%" h="16px" />
      <StyledArrowIcon color="#56DDA8" w="100%" h="16px" />
      <Form action="" method="">
        <Input ariaLabel="Name" type="text" id="name" placeholder="Name" />
        <Input ariaLabel="Phone" type="tel" id="phone" placeholder="Phone" />
        <Input ariaLabel="Email" type="email" id="email" placeholder="Email" />
        <Input w="120px" color="#FFC901" type="submit" value="Send" />
      </Form>
    </Wrapper>
  );
};

export default SignUp;
