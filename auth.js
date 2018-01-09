import {observer} from 'mobx-react';
import store from './Store';
import {AsyncStorage} from 'react-native';

export default observer(new class auth {
  login(username,password){
    this.getToken(username,password)
  }
  logout(){
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('username')
    store.authenticated = false
    store.token = ""
    store.username = ""
  }
  firstLoad() {
      AsyncStorage.getItem('token').then((x) => {
        store.token = x
        if (x !== null){
          store.authenticated = true
        }
      })
      AsyncStorage.getItem('username').then((x) => store.username = x)
  }
  signup(username,password){
    fetch("http://139.59.119.40/api/register/", {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json',
     },
     body: JSON.stringify({
       "username": username,
       "password": password
     })}
   ).then(function(res) {
     console.log(username,password)
     this.getToken(username,password)
   }.bind(this)).catch((error) => console.log(error)).done();
  }
  getToken(username,password){
     fetch("http://139.59.119.40/api/login/", {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })}
    ).then((x) => {
      if (x.status == '200') { return x.json()}
      else { alert('Something Wrong happened')}
    })
    .then((res) => {
      store.authenticated = true
      store.token = res.token
      store.username = res.username
      AsyncStorage.setItem('token', res.token);
      AsyncStorage.setItem('username', res.username);
      console.log(res)
      alert(res.username)

    }).catch((error) => console.log(error));
  }
})
