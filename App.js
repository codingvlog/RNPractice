import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import UserDetailComponent from './components/UserDetailComponent';
import UserListComponent from './components/UserListComponent';

const RootStack = StackNavigator({
        UserListScreen : {
            screen : UserListComponent,
            navigationOptions : {
                title : 'User List'
            }
        },
        UserDetailScreen:{
            screen : UserDetailComponent,
            navigationOptions : {
                title : 'User Detail'
            }
        }
    },
    {
        initialRouteName:'UserListScreen'
    });

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

