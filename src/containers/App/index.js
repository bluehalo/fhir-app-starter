import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider } from 'semantic-ui-react';
import FhirClient from 'fhirclient';

import { getConfig } from './selectors';
import config from '../../config';
import history from '../../modules/history';
import Home from '../Home';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

class App extends React.Component {
  componentDidMount() {
    const { loadConfig, loaded } = this.props;

    if (!loaded) {
      loadConfig();
    }

    FhirClient.oauth2
      .ready()
      .then(client => {
        console.log(client);
      })
      .catch(e => {});
  }

  render() {
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
  }
}

function mapStateToProps(state) {
  return { loaded: !!getConfig(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    loadConfig: () => {
      return dispatch({ type: 'App/LOAD_CONFIG', payload: config });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
