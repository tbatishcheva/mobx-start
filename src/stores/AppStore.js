import {
  observable, action, decorate,

} from 'mobx';

class AppStore {
    value = 0;

    onClick = () => { // чтобы контекст не менялся никогда
      this.value = this.value + 1;
    };
}

export default decorate(AppStore, {
  value: observable,
  onClick: action,
});
