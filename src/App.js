/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My First React Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
    },
});

export default App;
*/

import React from 'react'; // JSX는 React.createElement를 호출하는 코드로 컴파일되므로 컴포넌트 작성 시 반드시 작성해야 하는 코드
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text
                style={{
                    fontSize: 30,
                    marginBottom: 10
                }}
            >
                My Button Component
            </Text>
            <MyButton />
        </View>

    );
};

export default App;