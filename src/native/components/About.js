import React from 'react';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>Welcome to DEC.</H1>
      <Spacer size={10} />
      <Text> Available cards will go here.</Text>
    </Content>
  </Container>
);

export default About;
