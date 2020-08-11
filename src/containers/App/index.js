import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Header, Divider } from 'semantic-ui-react';

import { loadSmartInfoAction } from './actions';
import { getSmartError, getPatient, getSmartInfo } from './selectors';
import history from '../../modules/history';
import Home from '../Home';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';
import Information from '../../components/Information';

class App extends React.Component {
  componentDidMount() {
    const { initializeSmartClient } = this.props;
    initializeSmartClient();
  }

  render() {
    const { error, smart, patient } = this.props;
    return (
      <Router history={history}>
        <Helmet />
        <Container style={{ marginTop: '2rem' }}>
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
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { error: getSmartError(state), smart: getSmartInfo(state), patient: getPatient(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    initializeSmartClient: () => dispatch(loadSmartInfoAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
