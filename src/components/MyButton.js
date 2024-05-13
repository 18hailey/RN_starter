import React from 'react'; // JSX는 React.createElement를 호출하는 코드로 컴파일되므로 컴포넌트 작성 시 반드시 작성해야 하는 코드
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
    // console.log(props);
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}
            >
            <Text style={{ color: 'white', fontSize: 24 }}>{props.children || props.title}</Text> 
            {/*true이면 평가를 멈추고 해당 피연산자 변환 전의 값 반환*/}
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'Button',
};

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default MyButton;