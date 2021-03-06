import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #80BCCF;
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 70px;
  padding: 32px;
`;

const Paragraph = styled.p`
  color: white;
  line-height: 1.25em;
  margin-top: ${props => props.mt ? props.mt : '0'};
  font-size: ${props => props.fontSize};
`;

const Invite = () => {
  return (
      <Wrapper>
        <Paragraph fontSize="20px">Hello xxx</Paragraph>
        <Paragraph fontSize="16px">Here’s a glimpse at some of the sensational scenery you’ll see.</Paragraph>
        <Paragraph fontSize="12px" mt="24px">You are invited to climb through dozens of colorful stages! Jump, dash, and roll your way through colorful and suprising environments.</Paragraph>
      </Wrapper>
  );
}

export default Invite;