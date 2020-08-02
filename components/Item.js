import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';

export default function Item(props) {
        return (
        <View style={{ 
            flex : 1, 
            flexDirection : 'row',
            paddingHorizontal : 20 ,
            marginTop :30
        }}>
            <Image source={{uri: props.image }}
                style={{
                    width: 80, 
                    height: 80
                }} 
            />
            <View style={{ 
                flex : 1, 
                flexDirection : 'column',
                marginLeft : 10 
            }}>
                <Text style={{flexWrap:'wrap', fontSize : 20 }}>Title : {props.title}</Text>
                <Text style={{flexWrap:'wrap', fontSize : 14 }}>Release Year :  {props.releaseYear}</Text>
            </View>
        </View>
    );
}
