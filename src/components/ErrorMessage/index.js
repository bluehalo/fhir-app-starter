import React from 'react';

import { Grid, Message, Divider, Icon } from 'semantic-ui-react';

const ErrorMessage = (props) => {
  const { header, body } = props;
  return (
    <Grid.Row>
      <Message icon color="yellow">
        <Icon name="exclamation circle" />
        <Message.Content>
          <Message.Header>{header}</Message.Header>
          <p>{body}</p>
        </Message.Content>
      </Message>
      <Divider hidden />
    </Grid.Row>
  );
};

export default ErrorMessage;
