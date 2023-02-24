import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{height:'100%',width:'100%',backgroundColor:'#00ff5a'}}>
                <View 
                    style={{
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
                <QRCodeScanner
                    ref={(node) => {this.scanner = node;}}
                    onRead={(e)=>{
                        this.props.navigation.navigate('Page2',{Data:e.data});
                        this.scanner.reactivate();
                    }}
                    showMarker
                    vibrate={false}
                    markerStyle={{borderColor:'green',borderRadius:20}}
                    containerStyle={{}}
                    cameraContainerStyle={{}}
                    cameraStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                />
                <View style={{marginVertical:50}}>
                </View>
            </View>
        )
    }
}

