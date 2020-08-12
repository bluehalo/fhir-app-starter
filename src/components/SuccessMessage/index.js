import React from 'react';

import { Grid, Message, Divider, Icon, List } from 'semantic-ui-react';

const SuccessMessage = (props) => {
  const { user, patient } = props;
  return (
    <Grid.Row>
      <Message icon color="green">
        <Icon name="check circle" />
        <Message.Content>
          <Message.Header>Launch successful!</Message.Header>
          <List>
            <List.Item>Patient: {patient.id}</List.Item>
            <List.Item>User: {user}</List.Item>
          </List>
        </Message.Content>
      </Message>
      <Divider hidden />
    </Grid.Row>
  );
};

export default SuccessMessage;
