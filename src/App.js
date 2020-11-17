import React from 'react';
import styled from 'styled-components';

import Search from './components/Search';
import ItemsList from './components/ItemsList';

export const Body = styled.div`
  background-color: #F6FAFF;
  height: 100%;
  widgth: 100%;

`;

const App = () => (
  <Body className="App">
    <Search />
    <ItemsList />
  </Body>
);

export default App;
