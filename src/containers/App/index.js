import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider, Message, Icon } from 'semantic-ui-react';
import FhirClient from 'fhirclient';

import { getConfig } from './selectors';
import config from '../../config';
import history from '../../modules/history';
import Home from '../Home';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    FhirClient.oauth2
      .ready()
      .then(client => {
        console.log(client);
      })
      .catch(() => {
        this.setState({
          error: {
            header: 'Something went wrong!',
            body: 'Make sure you are launching from a SMART On FHIR Sandbox',
          },
        });
      });
  }

  componentDidMount() {
    const { loadConfig, loaded } = this.props;

    if (!loaded) {
      loadConfig();
    }
  }

  render() {
    const { error } = this.state;
    return (
      <Router history={history}>
        <Helmet />
        <Wrapper>
          <Container>
            <Grid columns="1" stackable>
              <Grid.Column>
                {error ? (
                  <Grid.Row>
                    <Message icon color="yellow" gutter="5">
                      <Icon name="exclamation circle" />
                      <Message.Content>
                        <Message.Header>{error.header}</Message.Header>
                        <p>{error.body}</p>
                      </Message.Content>
                    </Message>
                    <Divider hidden />
                  </Grid.Row>
                ) : null}
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
