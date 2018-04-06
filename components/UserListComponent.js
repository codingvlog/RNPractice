import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import axios from 'axios';

export default class UserListComponent extends Component {
    constructor()
    {
        super();
        this.state={
            userData:null
        }
    }

    componentWillMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    userData:response.data
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    goToDetail(id)
    {
        this.props.navigation.navigate('UserDetailScreen',{
            userId : id
        });
    }

    render()
    {
        return(
                !this.state.userData ?
                    <Text>LOADING</Text>
                    :
                    <FlatList
                        data={this.state.userData}
                        renderItem = {({item})=>
                            <TouchableOpacity
                                style={style.item}
                                onPress={()=>this.goToDetail(item.id)}>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                            </TouchableOpacity>

                        }
                        keyExtractor = {(item)=>item.id}
                    />
        );
    }
}

const style = StyleSheet.create({
   item:{
       padding:10,
       height:50
   }
});
