import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Bmi() {

    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [result , setResult] = useState('');

    console.log("STATE : ", weight, height, bmi);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        var result = "";
        if (output<18.5)
            result ="UNDERWEIGHT";
        else if (output>=18.5 && output<=24.9)
            result ="NORMAL";
        else if (output>=25 && output<=29.9)
            result ="OVERWEIGHT";
        else if (output>=30 && output<=34.9)
            Result ="OBESE";
        else if (output>=35)
            result ="MORBIBLY OBESE";
        setResult(result);       
    };
    


        return (

        <View style={{ 
            flex : 1, 
            flexDirection : 'column',
            justifyContent : 'center', 
            paddingHorizontal : 20 ,
        }}>

            <Text style={{ fontSize : 30 }}>Weight (kgs) : </Text>
            <TextInput 
                placeholder="enter your weight ..."            
                keyboardType="numeric"
                value={weight}
                onChangeText={(text) => setWeight(text)}
                style={{ marginBottom : 20 }} 
            />

            <Text style={{ fontSize : 30 }}>Height (cm) : </Text>
            <TextInput 
                placeholder="enter your height ..."
                keyboardType="numeric"
                value={height}
                onChangeText={(text) => setHeight(text)}
                style={{ marginBottom : 20 }}
            />

            <Text style={{ fontSize : 30 }}>BMI : {bmi}</Text>

            <Button title="Calculate" onPress={compute}   />

            <Text style={{ 
                fontSize : 30,
                justifyContent : 'center'
            }}>
                {result}
            </Text>

        </View>

    );
}
