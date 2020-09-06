import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function MidtermFirstScreen() {


    const [name, setName] = useState('Test');
    const [Inputname, setInputName] = useState('');

    const compute = () => {
        let result = (name);
        setInputName(result);
    };

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#50E3C2',
                alignItems: 'flex-end',
            }}>
                <Text style={{ fontSize: 20 }}>{Inputname}</Text>
                <Text style={{ fontSize: 20 }}>{Inputname.length} Char</Text>
            </View>
            <View style={{
                flex: 4,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 20 }}>Your Name</Text>
                <TextInput
                    placeholder="enter your name"
                    keyboardType="default"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{ marginBottom: 10, borderColor: 'gray', height: 40, borderWidth: 1, width: '50%' }}
                />
                <Button title="submit" onPress={compute} />
            </View>
        </View>
    );
}
