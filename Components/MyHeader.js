import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
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
            <Title>Navigate</Title>
          </Body>
          <Right>
            <Button onPress={this.alertMe.bind(this)} transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}
