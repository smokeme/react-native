import { extendObservable } from 'mobx';
class myStore {
  constructor(){
    extendObservable(this, {
      header: "Header",
      authenticated: false,
      username: "",
      token: ""
    })
  }
}
export default new myStore()
