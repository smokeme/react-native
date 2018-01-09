import React, { Component } from 'react';
import {  Card, CardItem, Body, Button, Text , CheckBox} from 'native-base';
import store from '../Store';

export default class MyDetail extends Component {
  render(){
  return (
    <Card>
    <CardItem>
      <Body>
        <Text>{store.object.title}</Text>
        <Text>{store.object.id}</Text>
        <Text>{store.object.userId}</Text>
      </Body>
    </CardItem>
       </Card>

  )
}
}
