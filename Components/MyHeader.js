import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from '../Store'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default observer(class HeaderExample extends Component {
  alertMe(){
    alert('test')
  }
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{store.header}</Title>
          </Body>
          <Right>
            <Button onPress={this.alertMe.bind(this)} transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
})
