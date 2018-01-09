import React, { Component } from 'react';
import { Form, Item, Input, Button,Icon, Text, View } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import store from '../Store';
import auth from '../auth';
import {observer} from 'mobx-react';

export default observer(class MyForm extends Component {
  constructor(){
    super();
    this.state = {
      status: false
    }
  }
  signUp(){
    auth.logout()
  }
  changeMe(){
    this.setState({status: !this.state.status
    })
  }
  componentWillMount(){
    store.header = 'My Logout'
  }
  render() {
    return (
          <Form>
            <Button danger={this.state.status} onPress={this.changeMe.bind(this)}>
            <Text>Color</Text>
            </Button>

            <Button onPress={this.signUp.bind(this)}>
            <Text>Logout</Text>
            </Button>
          </Form>
    );
  }
})
