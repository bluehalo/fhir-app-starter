import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider } from 'semantic-ui-react';

import history from '../../modules/history';
import Home from '../Home';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const App = () => {
  return (
    <Router history={history}>
      <Helmet />
      <Wrapper>
        <Container>
          <Grid columns="1" stackable>
            <Grid.Column>
              <Grid.Row>
                <Header as="h1">FHIR App Starter</Header>
                <Divider />
              </Grid.Row>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Wrapper>
    </Router>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
