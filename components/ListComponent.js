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

const userData = [
    {key:'Jodi'},
    {key:'Coding'},
    {key:'Vlog'},
];

export default class ListComponent extends Component {
    render()
    {
        return(
            <FlatList
                data={userData}
                renderItem = {({item})=>
                    <TouchableOpacity
                        style={style.item}
                        onPress={()=>alert("YOU TOUCHED ON : "+item.key)}>
                        <Text style={{fontSize:20}}>{item.key}</Text>
                    </TouchableOpacity>

                }
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
