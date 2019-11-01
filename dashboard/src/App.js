import React from 'react';
import styled from 'styled-components'

import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <AppHeader className="App-header">
        <AppHeaderText>Player Stats</AppHeaderText>
      </AppHeader>
    <Dashboard />
    </div>
  );
}

export default App;


const AppHeader = styled.header`
  background-color: #000089;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppHeaderText = styled.h1`
  font-size: calc(30px + 2vmin);
  color: white;
  font-family: 'Graduate', cursive;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;