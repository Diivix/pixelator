import React from 'react';
import ControlPanel from '../control-panel/ControlPanel';
import Grid from '../grid/Grid';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  text-align: left;
  margin: 10px 0 30px 10px;
`;

const Title = styled.h1``;

const Text = styled.p``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  /* min-height: 100vh; */
  align-items: center;
  justify-content: center;
  color: white;
`;

const ColLeft = styled.div`
  height: 100%;
  width: 25%;
  max-width: 25%;
`;
const ColCenter = styled.div`
  height: 100%;
  width: 50%;
  max-width: 50%;
`;
const ColRight = styled.div`
  height: 100%;
  width: 25%;
  max-width: 25%;
`;

function App() {
  return (
    <Container>
      <Header>
        <Title>Pixelator</Title>
        <Text>Unleash your pixel creativity. Start by activitating cells on the grid.</Text>
      </Header>
      <Content>
        <ColLeft></ColLeft>

        <ColCenter>
          <Grid />
        </ColCenter>

        <ColRight>
          <ControlPanel />
        </ColRight>
      </Content>
    </Container>
  );
}

export default App;
