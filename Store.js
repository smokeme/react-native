import { extendObservable } from 'mobx';
class myStore {
  constructor(){
    extendObservable(this, {
      header: "Header",
      authenticated: false,
      username: "",
      token: "",
      status: true,
      showDetail: false,
      object: {},

    })
  }
}
export default new myStore()
