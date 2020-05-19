import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider, Message } from 'semantic-ui-react';

import { loadConfigAction, loadSmartInfoAction } from './actions';
import { getSmartError, getPatient, getSmartInfo } from './selectors';
import history from '../../modules/history';
import Home from '../Home';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

const Red = styled.span`
  color: #e25555;
`;

class App extends React.Component {
  componentDidMount() {
    const { loadConfig, initializeSmartClient } = this.props;

    loadConfig();
    initializeSmartClient();
  }

  render() {
    const { error, smart, patient } = this.props;
    return (
      <Router history={history}>
        <Helmet />
        <Wrapper>
          <Container>
            <Grid columns="1" stackable>
              <Grid.Column>
                {error ? <ErrorMessage {...error} /> : null}
                {patient ? <SuccessMessage patient={patient} user={smart.user} /> : null}
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
  return { error: getSmartError(state), smart: getSmartInfo(state), patient: getPatient(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    loadConfig: () => dispatch(loadConfigAction()),
    initializeSmartClient: () => dispatch(loadSmartInfoAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
