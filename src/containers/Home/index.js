import React from 'react';
import { connect } from 'react-redux';

import { Header, Grid, Icon } from 'semantic-ui-react';

import { LOAD_PATIENT_INFO } from './constants';
import { getReady } from './selectors';
import { getPatient } from '../App/selectors';

class Home extends React.Component {
  componentDidMount() {
    const { error, patient, loadPatient } = this.props;
    if (!error && !patient) {
      loadPatient();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Row>
          <Header as="h2">
            <Icon name="check" />
            Build something great
          </Header>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { ready: getReady(state), patient: getPatient(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPatient: () => {
      dispatch({ type: LOAD_PATIENT_INFO });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
