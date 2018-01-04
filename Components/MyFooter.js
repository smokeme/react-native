import React, { Component } from 'react';
import { Container,Content,Footer, FooterTab, View,Button, Icon, Text } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import MyForm from './MyForm'
import MyCard from './MyCard'

export default class MyFooter extends Component {
  constructor(){
    super();
    this.state = {
      button: '',
    }
  }
  changeMe(button){
    let x = button + " " + this.state.button
    this.setState({button:x})
  }
  render() {
    return (
        <Container>
        <Content>
        <Route exact path="/" component={MyForm} />
        <Route path="/x" component={MyCard} />

        </Content>
          <Footer>
          <FooterTab>
          <Button vertical>
          <Link to ='/'>
          <View>
          <Text>Home</Text>
          <Icon name='home' />
          </View>
          </Link>
          </Button>
          <Button vertical>
          <Link to ='/x'>
          <View>
          <Icon name='apps' />
          </View>
          </Link>
          </Button>
          </FooterTab>
        </Footer>
        </Container>

    );
  }
}
