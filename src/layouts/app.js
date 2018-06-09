/* global window */
/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp'
import { Loader, MyLayout } from '../components';
import { BackTop, Layout } from '../components/antd'
import { classnames, config } from '../utils'
import { Helmet } from 'react-helmet'
import { observer } from 'mobx-react'
import Error from '../pages/404'
import Dashboard from '../pages/dashboard';
import Users from '../pages/user';
import ECharts from '../pages/chart/ECharts';
import HighCharts from '../pages/chart/highCharts';
import ReCharts from '../pages/chart/ReCharts';
import '../themes/index.less'
import './app.less'

const { Content, Footer, Sider } = Layout
const { Header, Bread, styles } = MyLayout

@observer
export default class App extends React.Component {

  get store() {
    return this.props.rootStore.appScreenStore
  }

  componentDidMount() {
    setTimeout(() => this.store.readyAction(true), 1000);
  }

  render() {
    const { location, history } = this.props;
    const {
      user, siderFold, darkTheme,
      isNavbar, menuPopoverVisible, navOpenKeys,
      menu, siderFoldAction, navOpenKeysAction,
      ready
    } = this.store;

    const { iconFontJS, iconFontCSS, logo } = config

    const headerProps = {
      menu,
      user,
      location,
      siderFold,
      isNavbar,
      menuPopoverVisible,
      navOpenKeys,
      switchMenuPopover() {
      },
      logout() {
        history.push('/login');
      },
      switchSider() {
        siderFoldAction();
      },
      changeOpenKeys(openKeys) {
      },
    }

    const siderProps = {
      menu,
      location,
      siderFold,
      darkTheme,
      navOpenKeys,
      changeTheme() {
      },
      changeOpenKeys(openKeys) {
        navOpenKeysAction(openKeys);
      },
    }

    const breadProps = {
      menu,
      location,
    }

    const renderLayout = !ready ? null : (
      <Layout className={classnames({ [styles.dark]: false, [styles.light]: true })}>
        {!isNavbar && <Sider
          trigger={null}
          collapsible
          collapsed={siderFold}
        >
          {siderProps.menu.length === 0 ? null : <MyLayout.Sider {...siderProps} />}
        </Sider>}
        <Layout style={{ height: '100vh', overflow: 'scroll' }} id="mainContainer">
          <BackTop target={() => document.getElementById('mainContainer')} />
          <Header {...headerProps} />
          <Content>
            <Bread {...breadProps} />
            <Switch>
              <Route exact name="users" path="/user" component={Users} />
              <Route exact name="echart" path="/chart/ECharts" component={ECharts} />
              <Route exact name="highcharts" path="/chart/highCharts" component={HighCharts} />
              <Route exact name="recharts" path="/chart/Recharts" component={ReCharts} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={Error} />
            </Switch>
            <div></div>
          </Content>
          <Footer >
            {config.footerText}
          </Footer>
        </Layout>
      </Layout>
    );

    return (
      <div>
        <Helmet>
          <title>BRAND NAME</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href={logo} type="image/x-icon" />
          {iconFontJS && <script src={iconFontJS} />}
          {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
        </Helmet>
        <Loader fullScreen spinning={!ready} />
        {renderLayout}
      </div>
    )

  }

}

App.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}