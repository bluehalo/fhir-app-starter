import React from 'react';
import { connect } from 'react-redux';

import { Header, Grid, Divider, Table } from 'semantic-ui-react';

import Information from '../../components/Information';
import { LOAD_PATIENT_INFO } from './constants';
import { getReady, getConditions, getError } from './selectors';
import { getPatient } from '../App/selectors';

class Home extends React.Component {
  componentDidUpdate() {
    const { ready, patient, error, loadPatient } = this.props;
    console.log(this.props);
    if (ready && !patient && !error) {
      loadPatient();
    }
  }

  render() {
    const { ready, patient, conditions } = this.props;

    if (!patient || !ready || !conditions) {
      return <p>Loading</p>;
    }

    return (
      <React.Fragment>
        <Grid.Row>
          <Header as="h2">Patient Information</Header>
          <Divider hidden />
        </Grid.Row>
        <Grid.Row>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>
                  {`${patient.name[0].given[0]} ${patient.name[0].family[0]}`}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Conditions</Table.Cell>
                <Table.Cell>
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Code</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {conditions
                        .filter(condition => {
                          return condition.code.coding;
                        })
                        .map(condition => {
                          const coding = condition.code.coding[0];
                          console.log(coding);
                          return (
                            <Table.Row>
                              <Table.Cell>{coding.display}</Table.Cell>
                              <Table.Cell>{coding.code}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ready: getReady(state),
    patient: getPatient(state),
    conditions: getConditions(state),
    error: getError(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPatient: () => {
      dispatch({ type: LOAD_PATIENT_INFO });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
