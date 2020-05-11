import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { List, Header, Message, Grid } from 'semantic-ui-react';

import Logo from '../../components/Logo';

const Red = styled.span`
  color: #e25555;
`;

const Home = () => {
  return (
    <Grid.Row>
      <Header as="h2">Start building your apps right away</Header>
      <p>
        This project was built to reduce the ramp-up time for getting new projects off the ground.
        It is fairly opinionated in that it is comes out of the box with...
      </p>
      <List as="ul" bulleted>
        <List.Item as="li">
          <a href="https://reactjs.org/">React</a> (of course)
        </List.Item>
        <List.Item as="li">
          <a href="https://redux.js.org/">Redux</a> (duh)
        </List.Item>
        <List.Item as="li">
          <a href="https://redux-saga.js.org/"> Redux-Saga</a> (for async actions)
        </List.Item>
        <List.Item as="li">
          <a href="https://redux-saga.js.org/"> Font Awesome</a> (for icons <Logo />)
        </List.Item>
        <List.Item as="li">
          <a href="https://semantic-ui.com/">Semantic-UI</a> (because it looks nice)
        </List.Item>
      </List>
      <p>This project was inspired by...</p>
      <List bulleted>
        <List.Item>
          <a href="https://redux-saga.js.org/">react-boilerplate</a>
        </List.Item>
        <List.Item>
          <a href="https://redux-saga.js.org/">react-redux-saga-boilerplate</a>
        </List.Item>
        <List.Item>
          <a href="https://github.com/facebook/create-react-app">create-react-app</a>
        </List.Item>
      </List>
      Good luck!
      <Message>
        Made with <Red>&hearts;</Red> by <a href="https://twitter.com/zeevosec">Shane O'Neill</a>
      </Message>
    </Grid.Row>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
