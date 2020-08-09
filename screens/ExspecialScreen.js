import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function ExspecialScreen() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ backgroundColor: '#FFEBB6', flex: 1 }}></View>
            <View style={{ flex: 2 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#8BD7B1', flex: 1 }}></View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ backgroundColor: '#FE706E', flex: 1 }}></View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#FFCB65', flex: 1 }}></View>
                                <View style={{ backgroundColor: '#FE706E', flex: 1 }}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
