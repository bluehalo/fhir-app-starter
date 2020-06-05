import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider } from 'semantic-ui-react';

import { loadConfigAction, loadSmartInfoAction } from './actions';
import { getSmartError, getPatient, getSmartInfo } from './selectors';
import history from '../../modules/history';
import Home from '../../containers/Home';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';
import Information from '../../components/Information';

const Wrapper = styled.div`
  margin-top: 3rem;
`;

class App extends React.Component {
  componentDidMount() {
    const { loadConfig, initializeSmartClient } = this.props;

    loadConfig();
    initializeSmartClient();
  }

  render() {
    const { error, smart, patient } = this.props;
    console.log(error);
    console.log(smart);
    console.log(patient);
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

                <Grid.Row>
                  <Information />
                </Grid.Row>

                <Grid.Row>
                  <Divider />
                </Grid.Row>

                {smart ? (
                  <Switch>
                    <Route path="/" exact component={Home} />
                  </Switch>
                ) : null}
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
