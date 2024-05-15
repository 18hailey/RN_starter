import React from 'react'; // JSX는 React.createElement를 호출하는 코드로 컴파일되므로 컴포넌트 작성 시 반드시 작성해야 하는 코드
import { Text, TouchableOpacity } from 'react-native';

const EventButton = () => {
    const _onPressIn = () => {console.log("Press In!!!\n")};
    const _onPressOut = () => {console.log("Press Out!!!\n")};
    const _onPress = () => {console.log("Press !!!\n")};
    const _onLongPress = () => {console.log("Long Press!!!\n")};

    return (
        <TouchableOpacity // 버튼
            style={{
                backgroundColor: '#f1c40f',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            onPress={_onPress}
            onLongPress={_onLongPress}
            delayLongPress={3000} // 호출되는 시간 조절
            >
            <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>  
        </TouchableOpacity>
    );
};

export default EventButton;