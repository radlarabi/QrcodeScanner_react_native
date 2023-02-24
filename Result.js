import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'

export default class Result extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { Data } = this.props.route.params;
        return(
                <ScrollView 
                    style={{
                        backgroundColor:'#00ff5a',
                        elevation:5
                    }}
                >
                    <View style={{
                        rflex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                            }} 
                            source={
                                    require('./assets/images/JBU_FSSM.png')
                                }
                        />
                    </View>
                    <Text style={styles.Static}>
                        - Famille : {Data.split('#')[1]}
                    </Text>
                    <Text style={styles.Static}>
                        - Famille en arabes : {Data.split('#')[2]}
                    </Text>
                    <Text style={styles.Static}>
                        - Espéces : {Data.split('#')[3]}
                    </Text>
                    <Text style={styles.Static}>
                        - Noms Arabes : {Data.split('#')[4]}
                    </Text>
                    <Text style={styles.Static}>
                        - Noms Amazigh : {Data.split('#')[5]}
                    </Text>
                    <Text style={styles.Static}>
                        - Noms Tifinagh : {Data.split('#')[6]}
                    </Text>
                    <Text style={styles.Static}>
                        - Noms Français : {Data.split('#')[7]}
                    </Text>
                    <Text style={styles.Static}>
                        - Noms Anglais : {Data.split('#')[8]}
                    </Text>
                    <Text style={styles.Static}>
                        - Origine géographique : {Data.split('#')[9]}
                    </Text>
                    <Text style={styles.Static}>
                        - Généralité : {Data.split('#').length > 9 ? (Data.split('#')[10]).split('"')[0]: null}
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('Home');
                        }}
                        style={{
                            alignSelf: 'center',
                            backgroundColor: 'green',
                            borderRadius: 30,
                            padding: 10,
                            width:200,
                            paddingVertical: 20,
                        }}
                        >
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize:16
                        }}>Go Back</Text>
                    </TouchableOpacity>
                </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    Static:{
        fontSize:26,
        paddingTop:10
    }
})