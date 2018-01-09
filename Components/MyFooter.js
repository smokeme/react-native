import React, { Component } from 'react';
import { Container,Content,Footer, FooterTab, View,Button, Icon, Text } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import MyForm from './MyForm'
import MyCard from './MyCard'
import MyLogout from './MyLogout'
import {observer} from 'mobx-react';
import store from '../Store';
import MyDetail from './MyDetail';

export default observer(class MyFooter extends Component {
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
  showPage(){
    store.showDetail = false
  }
  render() {
    return (
      <NativeRouter>

        <Container>
        <Content>
        {store.authenticated ? <Route exact path="/" component={MyLogout} /> : <Route exact path="/" component={MyForm} />}
        {store.showDetail ? <Route path="/x" component={MyDetail} /> : <Route path="/x" component={MyCard} /> }

        </Content>
          <Footer>
          <FooterTab>
          <Button vertical>
          <Link to ='/x'>
          <View>
          <Text>Home</Text>
          <Icon name='home' />
          </View>
          </Link>
          </Button>
          <Button vertical>
          <Link to ='/x' onPress={this.showPage.bind(this)}>
          <View>
          <Icon name='apps' />
          </View>
          </Link>
          </Button>
          </FooterTab>
        </Footer>
        </Container>
        </NativeRouter>

    );
  }
})
