import React, { Component } from 'react';

import Dashboard from './components/view/Dashboard';
import Profile from './components/view/Profile';

const Navigation = TabNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
}, {
  tabBarOptions: {
    activeTintColor: #cc8437
  }
})
export default Navigation;
