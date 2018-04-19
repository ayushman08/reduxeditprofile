import React, { Component } from 'react';
import Home from '../components/LibraryList';
import Detail from '../components/Detail';
import { Router, Scene } from 'react-native-router-flux';
// import Welcome from "../components/welcome"
// import RepoList from "../components/RepoList"
// import RepoInfo from "../components/RepoInfo"


const RouterComponent = () => (
    <Router hideNavBar= "true">
      <Scene key="root">
      <Scene key="home" component={Home}  initial  />
      <Scene key="detail" component={Detail}  />
     </Scene>


  </Router>

);

export default RouterComponent;