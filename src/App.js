import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout } from 'antd';

import './App.css';
import logo from './ilunestradores-logo.png';

import NavigationContainer from './containers/NavigationContainer';
import HomeContainer from './containers/HomeContainer';
import AlbumListContainer from './containers/AlbumListContainer';
import PhotoListContainer from './containers/PhotoListContainer';

const { Header, Footer, Content } = Layout;

const App = () => (
  <Layout id="Layout">
    <Header id="Header">
      <Link to={'/'}>
        <img alt="lcayuso.com" src={logo} className="logo" />
      </Link>
      <NavigationContainer />
    </Header>
    <Content id="content">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/albums" component={AlbumListContainer} />
        <Route exact path="/album/:albumId" component={PhotoListContainer} />
      </Switch>
    </Content>
    <Footer id="Footer">lcayuso.com</Footer>
  </Layout>
);

export default App;
