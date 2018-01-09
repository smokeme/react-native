import React, { Component } from 'react';
import { Form, Item, Input, Button,Icon, Text, View } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import store from '../Store';
import auth from '../auth';
import {observer} from 'mobx-react';

export default observer(class MyForm extends Component {

  signUp(){
    auth.logout()
  }
  componentWillMount(){
    store.header = 'My Logout'
  }
  render() {
    return (
          <Form>

            <Button onPress={this.signUp.bind(this)}>
            <Text>Logout</Text>
            </Button>
          </Form>
    );
  }
})
