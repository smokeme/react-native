import { extendObservable } from 'mobx';
class myStore {
  constructor(){
    extendObservable(this, {
      key: "value",
    })
  }
}
export default new myStore()
