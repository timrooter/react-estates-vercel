import React from 'react';
import { Container, Header, Icon, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import "./EmailPages.css"

function EmailSuccess() {
  return (
    <Container textAlign='center'>
      <div className='email'>
        <Header as='h2' icon>
          <Icon name='check circle' color='green' />
          Email Confirmed
          <Header.Subheader>Your email was successfuly confirmed. Thank you!</Header.Subheader>
        </Header>
        </div>
        <Button as={Link} to="/" color='teal'>Back to Home</Button>
      <Footer/>
    </Container>
  );
}

export default EmailSuccess;