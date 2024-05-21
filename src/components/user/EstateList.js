import React, { useState } from 'react';
import { Button, Container, Header, Icon, Modal, Segment, Item, Image, Grid, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PaymentComponent() {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    axios.post('https://estates-api-5b006150c849.herokuapp.com/payment/create', null)
      .then(response => {
        // Redirect the user to the PayPal approval URL
        window.location.href = response.data;
      })
      .catch(error => {
        console.error("There was an error creating the payment!", error);
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Segment color='orange'>
        <Item.Group divided unstackable relaxed link>
          <Item>
            <Image src="https://pravogrupp.ru/wp-content/uploads/2018/05/urist_po_zalogu_nedvigimosti-e1525127280907.jpg" size='medium' bordered rounded />
            <Item.Content>
              <Item.Header>Консультация с Туром по выбранным объектам</Item.Header>
              <Item.Meta>+77001707070</Item.Meta>
              <Item.Description>Купите подробную Консультацию у эксперта с многолетним стажем, который подскажет и подберет вам лучшие апартаменты по вашей ценовой категории и удобному расположению для вас!</Item.Description>
              <Item.Extra>
                <p style={{ fontWeight: 'bold' }}>Цена: 50$</p>
                <Button color='orange' onClick={() => setOpen(true)}>Купить</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size='small'
      >
        <Header icon='payment' content='Выберите способ оплаты' />
        <Modal.Content>
          <Button.Group>
            <Button onClick={() => setPaymentMethod('paypal')}>PayPal</Button>
            <Button.Or />
            <Button onClick={() => setPaymentMethod('card')}>Card</Button>
          </Button.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => setOpen(false)}>
            <Icon name='remove' /> Отмена
          </Button>
          <Button color='green' onClick={handlePayment} loading={isLoading}>
            <Icon name='checkmark' /> Подтвердить
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
}

function EstateList({ isEstatesLoading, estateTextSearch, estates, handleInputChange, handleSearchEstate }) {
  let estateList;
  if (estates.length === 0) {
    estateList = <Item key='no-estate'>No Estate</Item>;
  } else {
    estateList = estates.map(estate => (
      <Item key={estate.id}>
        <Image src={estate.poster} size='medium' bordered rounded />
        <Item.Content>
          <Item.Header>{estate.title}</Item.Header>
          <Item.Meta>{estate.contact}</Item.Meta>
          <Item.Description>{estate.description}</Item.Description>
          <Item.Extra>
            <p>Цена за кв.м.: {estate.price}₸</p>
            <p>Местоположение: {estate.address}</p>
          </Item.Extra>
        </Item.Content>
      </Item>
    ));
  }

  return (
    <div>
      <PaymentComponent />

      <Segment loading={isEstatesLoading} color='grey'>
        <Grid stackable divided>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Header as='h2'>
                <Icon name='building' />
                <Header.Content>Estates</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Form onSubmit={handleSearchEstate}>
                <Input
                  action={{ icon: 'search' }}
                  name='estateTextSearch'
                  placeholder='Search by ID or Title'
                  value={estateTextSearch}
                  onChange={handleInputChange}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Item.Group divided unstackable relaxed link>
          {estateList}
        </Item.Group>
      </Segment>

    </div>
  );
}

export default EstateList;
