import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class MyComponent extends Component {
    constructor()
    {
        super();
        this.state = {
            input1 : 0,
            input2: 0,
            result:0
        }
    }

    doAdd()
    {
        let result = parseInt(this.state.input1) + parseInt(this.state.input2);
        this.setState({
            result:result
        });
    }

    doSubstract()
    {
        let result = parseInt(this.state.input1) - parseInt(this.state.input2);
        this.setState({
            result:result
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.title}</Text>

                <TextInput
                    style={{width:200}}
                    onChangeText={(text)=>this.setState({input1:text})}
                    value={this.state.text}
                    placeholder="Input 1"
                />
                <TextInput
                    style={{width:200}}
                    onChangeText={(text)=>this.setState({input2:text})}
                    value={this.state.text}
                    placeholder="Input 2"
                />
                <View style={styles.buttonView}>
                    <Button title="ADD" onPress={()=>this.doAdd()}/>
                    <Button title="SUBSTRACT" onPress={()=>this.doSubstract()}/>
                </View>

                <Text style={{fontSize:24}}>{this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonView:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:200
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

