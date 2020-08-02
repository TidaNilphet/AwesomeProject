import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Ex11Screen() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View
                style={{ backgroundColor: '#4A90E2', flex: 1 }}></View>
            <View
                style={{ backgroundColor: '#50E3C2', flex: 1 }}></View>
        </View>
    );
}