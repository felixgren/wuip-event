import styled from "styled-components";
import desktop from "../utils/breakpoints";

const Wrapper = styled.div`
  background-color: #80BCCF;
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 70px;
  padding: 32px 32px 64px;

  ${desktop} {
    width: 50%;
    margin: 80px 24px 24px;
    padding: 64px 80px;
  }
`;

const Paragraph = styled.p`
  color: white;
  line-height: 1.25em;
  margin-top: ${props => props.mt ? props.mt : '0'};
  font-size: ${props => props.size};

  ${desktop} {
    font-size: ${props => props.deskSize};
  }
`;

const Invite = () => {
  return (
      <Wrapper>
        <Paragraph size="20px" deskSize="36px">Hello X!</Paragraph>
        <Paragraph size="16px" deskSize="24px">Here’s a glimpse at some of the sensational scenery you’ll see.</Paragraph>
        <Paragraph size="12px" deskSize="22px" mt="24px">You are invited to climb through dozens of colorful stages! Jump, dash, and roll your way through colorful and suprising environments.</Paragraph>
      </Wrapper>
  );
}

export default Invite;