import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import PictureCard from "./PictureCard";
import waterimg from "../images/water.png";
import desktop from "../utils/breakpoints";

const Wrapper = styled.div`
  margin-top: 8px;
  padding-bottom: 64px;
  ${desktop} {
    width: 50%;
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

  &::placeholder {
    padding: 8px;
  }

  &:hover {
    opacity: 0.8;
    outline-offset: 4px;
    outline: 3px solid #1C547F;
  }
`;

const SignUp = () => {
  const text = "Join to get a sneak peek at the action-packed upcoming game.";
  const alt = "Water world";
  return (
    <Wrapper>
      <PictureCard fontSize="20px" imgSrc={waterimg} imgAlt={alt} text={text} />
      <ArrowIcon color="#56DDA8" w="100%" h="16px" />
      <ArrowIcon color="#56DDA8" w="100%" h="16px" />

      <Form action="" method="">
        <Input ariaLabel="Name" type="text" id="name" placeholder="Name" />
        <Input ariaLabel="Phone" type="tel" id="phone" placeholder="Phone" />
        <Input ariaLabel="Email" type="email" id="email" placeholder="Email" />
        <Input w="100px" color="#FFC901" type="submit" value="Send" />
      </Form>
    </Wrapper>
  );
};

export default SignUp;
