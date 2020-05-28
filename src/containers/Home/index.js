import React from 'react';
import { connect } from 'react-redux';

import { Header, Grid, Divider } from 'semantic-ui-react';

import Information from '../../components/Information';
import { LOAD_PATIENT_INFO } from './constants';
import { getReady } from './selectors';
import { getPatient } from '../App/selectors';

class Home extends React.Component {
  componentDidUpdate() {
    const { ready, patient, loadPatient } = this.props;
    if (ready && !patient) {
      loadPatient();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <Header as="h2">Start building your FHIR apps right away</Header>
          <Information />
        </Grid.Row>
        <Grid.Row>
          <Divider />
        </Grid.Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { ready: getReady(state), patient: getPatient(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPatient: () => {
      dispatch({ type: LOAD_PATIENT_INFO });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
