import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import axios from 'axios';

export default class UserDetailComponent extends Component {
    constructor()
    {
        super();
        this.state={
            userDetail:null
        }
    }

    componentWillMount()
    {
        const userId = this.props.navigation.state.params.userId;
        axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    userDetail:response.data
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render()
    {
        return(
            this.state.userDetail?
               <View>
                   <Text>{this.state.userDetail.name}</Text>
                   <Text>{this.state.userDetail.email}</Text>
                   <Text>{this.state.userDetail.address.street}</Text>
                   <Text>{this.state.userDetail.phone}</Text>
               </View>
                :
                <View>
                    <Text>LOADING . . .</Text>
                </View>
        );
    }
}

const style = StyleSheet.create({
    item:{
        padding:10,
        height:50
    }
});
