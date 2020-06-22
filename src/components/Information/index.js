import React from 'react';

import { List } from 'semantic-ui-react';

const Information = () => {
  return (
    <React.Fragment>
      <p>
        This project was built to reduce the ramp-up time for getting new projects off the ground.
        It is fairly opinionated in that it comes out of the box with...
      </p>
      <List as="ul" bulleted>
        <List.Item as="li">
          <a href="https://reactjs.org/">React</a>
        </List.Item>
        <List.Item as="li">
          <a href="https://redux.js.org/">Redux</a>
        </List.Item>
        <List.Item as="li">
          <a href="https://redux-saga.js.org/">Redux-Saga</a>
        </List.Item>
        <List.Item as="li">
          <a href="https://semantic-ui.com/">Semantic-UI</a>
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
    </React.Fragment>
  );
};

export default Information;
