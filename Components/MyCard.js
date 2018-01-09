import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from '../Store'
import {ListView} from 'react-native';
import MyItem from './MyItem'
import {  Card, CardItem, Body, Text , CheckBox} from 'native-base';
export default observer(class CardExample extends Component {
  constructor(){
    super();
    this.state = {
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      }),
    }
  }
  componentWillMount(){
    store.header = 'Todos List'
    fetch(this.state.url).then(
      (x) => x.json()
    ).then(
      (x) => this.setState({dataSource: this.state.dataSource.cloneWithRows(x)})
    )
  }
  renderItem(x) {
    return (
      <MyItem object={x} />
    )
  }
  render() {
    return (
          <Card>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderItem}/>
          </Card>
    );
  }
})
