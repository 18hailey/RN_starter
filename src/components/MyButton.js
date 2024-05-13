import React from 'react'; // JSX는 React.createElement를 호출하는 코드로 컴파일되므로 컴포넌트 작성 시 반드시 작성해야 하는 코드
import { Text, TouchableOpacity } from 'react-native';

const MyButton = () => {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => alert('click')}>

            <Text style={{ color: 'white', fontSize: 24 }}>My Button</Text>
        </TouchableOpacity>
    );a
};

export default MyButton;