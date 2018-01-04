import { extendObservable } from 'mobx';
class myStore {
  constructor(){
    extendObservable(this, {
      header: "Header",
    })
  }
}
export default new myStore()
