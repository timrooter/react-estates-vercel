import React from 'react';
import { Container, Header, Icon, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from "../Footer";

function PaymentSuccess() {
  return (
    <Container textAlign='center'>
      <div className='payment-success'>
        <Header as='h2' icon>
          <Icon name='check circle' color='green' />
          Payment Successful
          <Header.Subheader>Your payment was successful. Thank you for your purchase!</Header.Subheader>
        </Header>
        <div className='recipe-table'>
        <Table celled textAlign='center'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>Receipt</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Amount:</Table.Cell>
              <Table.Cell>50.00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Currency:</Table.Cell>
              <Table.Cell>USD</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Description:</Table.Cell>
              <Table.Cell>Consulting and Tour</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </div>
        <Button as={Link} to="/" color='teal'>Back to Home</Button>
      </div>
      <Footer/>
    </Container>
  );
}

export default PaymentSuccess;