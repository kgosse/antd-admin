import { Store } from 'libx';
import { observable, action, computed } from 'mobx';
import {message} from '../../components/antd';

// Most of this is plain MobX.
export default class LoginScreenStore extends Store {
  @observable loading = false
  @observable ready = false

  @action
  loadingAction = (loading) => {
    this.loading = loading;
  }

  // Called by the UI whenever it wants to activate
  // this state from scratch.
  @action
  activateAction = () => {
    this.loadingAction(false);
    this.readyAction(false);
  }

  @action
  readyAction = (value) => {
    this.ready = value;
  }

  @action
  loginAction = ({username, password}, history) => {
    if (username != "guest" || password != "guest") {
      message.error("bad credentials");
    } else {
      history.push('/dashboard');
    }
  }
}