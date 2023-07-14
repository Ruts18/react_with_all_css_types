import React from 'react';
import styled from 'styled-components';

const MyStyle = () => {
  const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  padding: 10px;
  background-color: #e3f2ff ;
  box-shadow: 0.5px 0.5px 4px 0.1px #333;
  border-radius:0.2rem;
`;
// box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];
// 0:  0 for the top and bottom sides of the element. This removes any vertical spacing or margin.
// auto: for the left and right sides of the element.

  const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
  const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.7;
`;
// used to adjust the spacing between lines of text in paragraphs, headings

  return (
    <Container>
      <Title>Welcome to The GitHub Explorer</Title>
      <Paragraph>Lets you and others work together on projects from anywhere</Paragraph>

    </Container>
  );
};

export default MyStyle;