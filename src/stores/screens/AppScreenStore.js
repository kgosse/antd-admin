import { Store } from 'libx';
import { observable, computed, action  } from 'mobx';
import {config} from '../../utils';

const { prefix } = config;

export default class AppScreenStore extends Store {
    @observable user = {};
    @observable ready = false;
    @observable permissions = {
      visit: [],
    };
    @observable _menu = [
      {
        id: '1',
        icon: 'laptop',
        name: 'Dashboard',
        route: '/dashboard',
      },
      {
        id: '2',
        bpid: '1',
        name: 'Users',
        icon: 'user',
        route: '/user',
      },
      {
        id: '5',
        bpid: '1',
        name: 'Charts',
        icon: 'code-o',
      },
      {
        id: '51',
        bpid: '5',
        mpid: '5',
        name: 'ECharts',
        icon: 'line-chart',
        route: '/chart/ECharts',
      },
      {
        id: '52',
        bpid: '5',
        mpid: '5',
        name: 'highCharts',
        icon: 'bar-chart',
        route: '/chart/highCharts',
      },
      {
        id: '53',
        bpid: '5',
        mpid: '5',
        name: 'Rechartst',
        icon: 'area-chart',
        route: '/chart/Recharts',
      },
    ];
    @observable menuPopoverVisible = false;
    @observable siderFold = window.localStorage.getItem(`${prefix}siderFold`) === 'true';
    @observable darkTheme= window.localStorage.getItem(`${prefix}darkTheme`) === 'true';
    @observable isNavbar = document.body.clientWidth < 769;
    @observable _navOpenKeys = [];
    @observable locationPathname = '';
    @observable locationQuery = {};

    @computed
    get menu() {
      // Stores have access to the root store.
      return this._menu.slice();
    }

    @computed
    get navOpenKeys() {
      return this._navOpenKeys.slice();
    }
  
    @action
    siderFoldAction = () => {
      this.siderFold = !this.siderFold;
    };

    @action
    navOpenKeysAction = (data) => {
      this._navOpenKeys = data;
    }

    @action
    readyAction = (value) => {
      this.ready = value;
    } 
}