import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from '../Store'
import {  Card, CardItem, Body, Text } from 'native-base';
export default observer(class CardExample extends Component {
  componentWillMount(){
    store.header = 'My Card'
  }
  render() {
    return (
          <Card>
            <CardItem>
              <Body>
                <Text>
                This is a new Component
                </Text>
              </Body>
            </CardItem>
          </Card>
    );
  }
})
