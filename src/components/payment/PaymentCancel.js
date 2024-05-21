import React from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import "./PaymentPages.css"

function PaymentCancel() {
  return (
    
    <Container  textAlign='center'>
    <div className='payment-cancel'>
      <Header as='h2' icon>
        <Icon name='times circle' color='red' />
        Payment Canceled
        <Header.Subheader>Your payment was canceled. You can try again if you wish.</Header.Subheader>
      </Header>
      </div>
      <Button as={Link} to="/" color='teal'>Back to Home</Button>

      <Footer/>
    </Container>
  );
}

export default PaymentCancel;
